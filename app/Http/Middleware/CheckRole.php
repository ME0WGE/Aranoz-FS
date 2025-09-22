<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();

        switch ($role) {
            case 'admin':
                if(!$user->isAdmin()) {
                    return redirect()->back()->with('error', 'Vous n\'avez pas les permissions' );
                }
                break;

            case 'admin':
                if(!$user->isAdmin()) {
                    return redirect()->back()->with('error', 'Vous n\'avez pas les permissions' );
                }
                break;
        }


        return $next($request);
    }
}
