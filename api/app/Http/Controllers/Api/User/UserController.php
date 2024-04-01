<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function __construct()
    {
    }

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getMessage());
        } catch (TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getMessage());
        } catch (JWTException $e) {
            return response()->json(['token_absent'], $e->getMessage());
        }
        return response()->json(compact('user'));
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Registration
    -------------------------------------------------------------------------------------------- */
    public function register(Request $request)
    {
        $customMessages = [
            'email.required'     => 'Email is Required',
            'password.required'  => 'Password is Required',
            'password.min'       => 'Password must be at least :min characters',
            'name.required'      => 'Name is Required',
        ];
        $validatedData = Validator::make($request->all(), [
            'email'     => 'required',
            'password'  => 'required|min:6',
            'name'      => 'required',
        ], $customMessages);
        if ($validatedData->fails()) {
            return response()->json(['status' => 'validtion', 'errors' => $validatedData->errors()], 200);
        }
        try {
            $data['email']     = request('email');
            $data['name']      = request('name');
            $data['password']  = bcrypt(request('password'));
            $data['user_type'] = 'user';
            $data['status']    = 'active';
            $userdata = User::Create($data);
            $user = User::where('id', $userdata->id)->first();
            $data1['token'] = JWTAuth::fromUser($userdata);
            $data1['user'] = $user;
            return response()->json(['status' => 'success', 'message' => 'You are successfully Register..!', 'data' => $data1]);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => "Something went Wrong..."], 200);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Login
    -------------------------------------------------------------------------------------------- */
    public function login(Request $request)
    {
        $customMessages = [
            'email.required'     => 'Email is Required',
            'password.required'  => 'Password is Required',
            'password.min'       => 'Password must be at least :min characters',
            // 'user_type.required' => 'User Type is Required',
        ];
        $validatedData = Validator::make($request->all(), [
            'email'     => 'required',
            'password'  => 'required|min:6',
            // 'user_type' => 'required',
        ], $customMessages);
        if ($validatedData->fails()) {
            return response()->json(['status' => 'validtion', 'errors' => $validatedData->errors()], 200);
        }

        try {
            $credentials = $request->only('email', 'password');
            $data = [];
            try {
                if (!$token = JWTAuth::attempt($credentials)) {
                    return response()->json(['status' => 'error', 'message' => 'Please try again with Correct Details', 'data' => (object)[]], 200);
                }
                $userTypeCheck = User::where('email', $request->get('email'))->where('status', 'active')->first();
                if (!empty($userTypeCheck)) {
                    if ($userTypeCheck->user_type == 'user') {
                        if ($userTypeCheck->status != 'active') {
                            return response()->json(['status' => 'error', 'message' => 'You are not able to login in this Application', 'data' => (object)[]], 200);
                        }
                    }
                } else {
                    $userTypeCheck = User::where('email', $request->get('email'))->where('status', 'inactive')->first();
                    $data['object'] = (object)[];
                    return response()->json(['status' => 'error', 'message' => 'You are not able to login this application because of ', 'data' => (object)[]], 200);
                }
            } catch (JWTException $e) {
                return response()->json(['status' => 'error', 'message' => 'could_not_create_token', 'data' => (object)[]], 200);
            }
            if ($userTypeCheck->user_type == 'user') {
                $data['token'] = $token;
                $data['user'] = $userTypeCheck;
                $userTypeCheck->save();
                return response()->json(['status' => 'success', 'message' => 'Login successfully', 'data' => $data], 200);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went Wrong..!', 'data' => (object)[]], 200);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Get Own User Profile
    -------------------------------------------------------------------------------------------- */
    public function getProfile(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => 'You are not able login from this application...'], 200);
            }
            $user_data = User::where(['id' => $user->id])->first();
            $avatar_url = null;
            if ($user_data->avatar) {
                $avatar_url = Storage::url('user/' . $user_data->avatar);
            }

            $data['user'] = $user_data;
            $data['user']['avatar'] = $avatar_url;
            return response()->json(['status' => 'success', 'message' => 'User Profile Successfull', 'data' => $data]);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => "Something went Wrong..."], 200);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Update Own Profile
    -------------------------------------------------------------------------------------------- */
    public function updateProfile(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => 'You are not able login from this application...'], 200);
            }
            $user_data = User::where('id', $user->id)->first();
            if ($user_data) {
                $user_data->email  = request('email');
                $user_data->name   = request('name');
                $user_data->save();
                $data['user'] = $user_data;
                return response()->json(['status' => 'success', 'message' => 'Profile Update Successfully..!', 'data' => $data]);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 200);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Change Password
    -------------------------------------------------------------------------------------------- */
    public function changePassword(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => "Invalid Token..."], 200);
            }
            if ($user !== null) {
                $password     = $user->password;
                $old_password = $request->old_password;
                $new_password = $request->new_password;
                $c_password   = $request->confirm_password;
                if ($new_password != $c_password) {
                    return response()->json(['status' => 'error', 'message' => 'Your Password does not match with Above Password']);
                }
                if (isset($password)) {
                    if ($old_password == $new_password) {
                        return response(['status' => 'error', 'message' => 'New Password cannot be same as your current password. Please choose a different password.']);
                    } else {
                        if (Hash::check($old_password, $password)) {
                            $user->password = Hash::Make($new_password);
                            $user->save();
                            return response()->json(['status' => 'success', 'message' => 'Your password change Successfully..!']);
                        } else {
                            return response()->json(['status' => 'error', 'message' => 'Your current password does not matches with the password you provided. Please try again.']);
                        }
                    }
                } else {
                    return response()->json(['status' => 'error', 'message' => 'User not available.']);
                }
            } else {
                return response()->json(['status' => 'error', 'message' => "You are not able login from this "]);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 200);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Logout
    -------------------------------------------------------------------------------------------- */
    public function logout(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => 'You are not able login from this application...'], 200);
            }
            $user = User::find($user->id);
            JWTAuth::invalidate($request->token);
            return response()->json(['status'  => 'success', 'message' => 'User logged out Successfull..!']);
        } catch (Exception $e) {
            return response()->json(['status'  => 'error', 'message' => $e->getMessage()]);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Logout
    -------------------------------------------------------------------------------------------- */
    public function addCard(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => "Invalid Token..."], 200);
            }
            // dd($request->all());
            // $card = Card::create([
            //     'card_holder_name'   => $request->card_holder_name,
            //     'card_number'     => $request->card_number,
            //     'card_type'    => $request->card_type,
            //     'expiry_date' => $request->expiry_date,
            //     'user_id' => $user->id
            // ]);
            $cardData = [
                'card_holder_name' => $request->card_holder_name,
                'card_number' => $request->card_number,
                'card_type' => $request->card_type,
                'expiry_date' => $request->expiry_date,
                'user_id' => $user->id
            ];

            if ($request->id) {
                // If issetCardId is set, update the existing card record
                $card = Card::where('id', $request->id)->update($cardData);
            } else {
                // If issetCardId is not set, create a new card record
                $card = Card::firstOrCreate($cardData);
            }
            $carddateils = Card::find($card->id);
            return response()->json(['status'  => 'success', 'message' => 'User logged out Successfull..!', 'data' => $carddateils]);
        } catch (Exception $e) {
            return response()->json(['status'  => 'error', 'message' => $e->getMessage()]);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for Logout
    -------------------------------------------------------------------------------------------- */
    public function getCard(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => "Invalid Token..."], 200);
            }

            $carddateils = Card::where('user_id', $user->id)->get();
            return response()->json(['status'  => 'success', 'message' => 'User logged out Successfull..!', 'data' => $carddateils]);
        } catch (Exception $e) {
            return response()->json(['status'  => 'error', 'message' => $e->getMessage()]);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for User Card Delete
    -------------------------------------------------------------------------------------------- */
    public function getCardDelete(Request $request, $cardId)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => "Invalid Token..."], 200);
            }
            $cardDelete = Card::where('id', $cardId)->first();
            $cardDelete->delete();
            return response()->json(['status'  => 'success', 'message' => 'User Card Delete Successfull..!']);
        } catch (Exception $e) {
            return response()->json(['status'  => 'error', 'message' => $e->getMessage()]);
        }
    }

    /* -----------------------------------------------------------------------------------------
    @Description: Function for User Card Delete
    -------------------------------------------------------------------------------------------- */
    public function editCard(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => "Invalid Token..."], 200);
            }
            $editCard = Card::where('id', $request->cardId)->first();
            return response()->json(['status'  => 'success', 'message' => 'User Card Delete Successfull..!', 'data' => $editCard]);
        } catch (Exception $e) {
            return response()->json(['status'  => 'error', 'message' => $e->getMessage()]);
        }
    }
}
