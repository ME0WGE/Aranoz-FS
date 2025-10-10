<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Register role middleware
        $middleware->alias([
            'role' => \App\Http\Middleware\CheckRole::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->respond(function ($response, $exception, $request) {
            if (in_array($response->getStatusCode(), [403, 404])) {
                if ($response->getStatusCode() === 404) {
                    return \Inertia\Inertia::render('Errors/404')
                        ->toResponse($request)
                        ->setStatusCode(404);
                }
                
                if ($response->getStatusCode() === 403) {
                    return \Inertia\Inertia::render('Errors/403')
                        ->toResponse($request)
                        ->setStatusCode(403);
                }
            }
            
            return $response;
        });
    })->create();
