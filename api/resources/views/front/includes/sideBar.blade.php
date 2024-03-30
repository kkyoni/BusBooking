<header id="page-header">
    <div class="content-header">
        <div class="d-flex align-items-center">
            <a class="fw-semibold fs-5 tracking-wider text-dual me-3" href="{{ route('front.home') }}"> {{ __('One') }}<span
                    class="fw-normal">{{ __('UI') }}</span> </a>
        </div>
        <div class="d-flex align-items-center">
            <button type="button" class="btn btn-sm btn-alt-secondary d-md-none" data-toggle="layout"
                data-action="header_search_on">
                <i class="fa fa-fw fa-search"></i>
            </button>
            <div class="dropdown d-inline-block ms-2">
                <button type="button" class="btn btn-sm btn-alt-secondary d-flex align-items-center"
                    id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle" src="{{ asset('assets/admin/assets/media/avatars/avatar10.jpg') }}"
                        alt="Header Avatar" style="width: 21px;" />
                    <span class="d-none d-sm-inline-block ms-2">{{ Auth::user()->name }}</span>
                    <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                    aria-labelledby="page-header-user-dropdown">
                    <div class="p-3 text-center bg-body-light border-bottom rounded-top">
                        <img class="img-avatar img-avatar48 img-avatar-thumb"
                            src="{{ asset('assets/admin/assets/media/avatars/avatar10.jpg') }}" alt="">
                        <p class="mt-2 mb-0 fw-medium">{{ Auth::user()->name }}</p>
                        <p class="mb-0 text-muted fs-sm fw-medium">{{ __('Web Developer') }}</p>
                    </div>
                    <div role="separator" class="dropdown-divider m-0"></div>
                    <div class="p-2">
                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                            href="{{ route('front.logout') }}">
                            <span class="fs-sm fw-medium">{{ __('Log Out') }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
