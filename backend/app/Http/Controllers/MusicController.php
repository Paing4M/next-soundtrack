<?php

namespace App\Http\Controllers;

use App\Http\Requests\Music\MusicStoreRequest;
use App\Http\Resources\MusicResource;
use App\Models\Library;
use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class MusicController extends Controller {

  public function index(Request $request) {
    $music = Music::when($request->query('search'), function ($q) use ($request) {
      $q->where('title', 'LIKE', "%{$request->query('search')}%")
        ->orWhere('author', 'LIKE', "%{$request->query('search')}%");
    })->latest()->paginate(10);

    return MusicResource::collection($music);
  }


  public function show(Music $music) {
    return new MusicResource($music);
  }




  public function store(MusicStoreRequest $request) {
    $data = $request->validated();
    $image = $data['image'] ?? null;
    $song = $data['song'];

    $directory = 'music/' . Str::random(32);
    if ($image) {
      $path = $image->store($directory, 'public');
      Storage::makeDirectory($directory);
      $data['image'] = $path;
    }

    $song_path = $song->store($directory, 'public');
    $data['song'] = $song_path;

    $music = Music::create($data);




    if ($music) {
      return response()->json([
        'message' => 'Music is added successfully.',
        'status' => 201
      ], 201);
    }
  }



  public function addLibrary(Request $request) {

    $user = $request->user('sanctum');
    $music = Music::findOrFail($request->music_id);

    if ($music->is_in_user_library) {
      $user->library()->detach($request->music_id);
      return response()->json([
        'message' => 'Remove from library successfully.',
        'status' => 200,

      ]);
    }

    $user->library()->attach($request->music_id);

    return response()->json([
      'message' => 'Added to library successfully.',
      'status' => 201,

    ], 201);
  }



  public function stream(Music $music) {
    $music = Music::findOrFail($music->id);

    $filePath = Storage::path($music->song);
    // $fileSize = filesize($filePath);


    return response()->file($filePath, [
      'Content-Type' => 'audio/mpeg',
      'Content-Disposition' => 'inline; filename="' . basename($filePath) . '"'
    ]);
  }
}
