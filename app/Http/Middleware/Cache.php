<?php namespace App\Http\Middleware;

use Closure;

class Cache {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		$response = $next($request);
		$response->setEtag(md5($response->getContent()));
		$response->setPublic();

		$response->isNotModified($request);
	//	dd($response->getContent());
	//	$response->setEtag(, true);
		return $response;
	}

}
