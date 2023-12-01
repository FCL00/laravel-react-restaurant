<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function showRegister(){
        return inertia('Register');
    }
    public function showIndex(){
        return inertia('Index');
    }

    public function showMenu(){
        return inertia('Menu');
    }

    public function showLogin(){
        return inertia('Login');
    }
    
}
