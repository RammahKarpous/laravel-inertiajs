<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        return inertia('Home');
    }

    public function about()
    {
        return inertia('About');
    }
}
