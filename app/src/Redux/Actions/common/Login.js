import Swal from 'sweetalert2';
import { LOGIN_ERROR, LOGIN_SUCCESS } from '../../Types/common/Types';
import { LoginApi } from "../../Apis/common/ApiConfig";

export const LoginSuccess = (res) => {
    return {
        type: LOGIN_SUCCESS,
        payload: res,
    };
};
export const LoginError = (error) => {
    return {
        type: LOGIN_ERROR,
        error: error,
    };
};

export const LoginActionHandler = (data) => {
  return (dispatch) => {
    try {
      LoginApi(data)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Succesfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              dispatch(LoginSuccess(res.data.data));
            } else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                text: "Something went wrong!",
                timer: 1500,
              });
              dispatch(LoginError(errorMessage));
            }
          } else {
            dispatch(LoginError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(LoginError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(LoginError(err));
    }
  };
};

// export const LoginActionHandler = (data) => {
//     return (dispatch) => {
//         try {
//             authAxios
//                 .post('login', {
//                     email: data.email,
//                     password: data.password,
//                 })
//                 .then((res) => {
//                     const errorMessage = res?.data?.message;
//                     if (res && res.data && res.status === 200) {
//                         Swal.fire({
//                             position: 'center',
//                             icon: 'success',
//                             title: 'Login Successfully!',
//                             showConfirmButton: false,
//                             timer: 1500,
//                         });
//                         dispatch(LoginSuccess(res.data));
//                     } else {
//                         let data = res?.response?.data?.data;
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Oops...',
//                             text: 'Something went wrong!',
//                             html: `
//                   <p>${
//                       data.password ? data.password[0] : 'Something went wrong!'
//                   }</p>
//               `,
//                             confirmButtonColor: 'rgb(231,52,70)',
//                         });
//                         dispatch(LoginError(errorMessage));
//                     }
//                 })
//                 .catch((err) => {
//                     dispatch(LoginError('Something Went Wrong!!!'));
//                 });
//         } catch (err) {
//             dispatch(LoginError(err));
//         }
//     };
// };