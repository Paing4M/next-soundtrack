<?php

namespace App\Http\Controllers;

use App\Http\Requests\Music\MusicStoreRequest;
use App\Http\Resources\MusicResource;
use App\Models\Music;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class MusicController extends Controller {

  public function index() {
    $music = Music::latest()->paginate(10);

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
