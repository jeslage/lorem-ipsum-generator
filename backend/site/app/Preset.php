<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Preset extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'presets';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description', 'settings', 'textType', 'dateCreated', 'likes'];



}
