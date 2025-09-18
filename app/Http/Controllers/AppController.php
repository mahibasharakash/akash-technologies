<?php

namespace App\Http\Controllers;

class AppController extends Controller
{

    public function admin(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
    {
        return view('admin');
    }

    public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
    {
        return view('index');
    }

}
