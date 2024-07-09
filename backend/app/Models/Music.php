<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Music extends Model {
  use HasFactory, HasUuids;


  public $fillable = [
    'title',
    'author',
    'song',
    'image',
  ];
}
