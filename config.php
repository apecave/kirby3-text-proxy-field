<?php

Kirby::plugin(
    'apecave/kirby3-text-proxy-field',
    [
    'root'     => dirname(__FILE__, 1),
    'fields' => [
      'text-proxy' => [
      	'extends' => 'text',
        'computed' => [
                'placeholder' => function() {
                  $value = $this->placeholder ?? "";
                  $field = $this->model()->query($value, 'Kirby\Cms\Field');
                  return $field ? $field->text()->value() : $value;
                }
        ],
      ]
    ]
    ]
);
