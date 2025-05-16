<?php
    add_action( 'wp_enqueue_scripts', 'add_styles' );
    add_action( 'after_setup_theme', 'add_features');
    function add_styles() {
        wp_enqueue_style( 'style', get_stylesheet_uri() );
    }
    function add_features() {
        add_theme_support( 'custom-logo', [
            'height' => 50,
            'width' => 50,
            'flex-width' => false,
            'flex-height' => false,
            'header-text' => '',
            'unlink-homepage-logo' => false,
        ]);
    }
?>