<?php
    add_action( 'wp_enqueue_scripts', 'add_styles' );
    add_action( 'after_setup_theme', 'add_features');
    add_action('wp_enqueue_scripts', 'enqueue_custom_script');

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
    function enqueue_custom_script() {
        // Регистрируем скрипт
        wp_register_script(
            'custom-script',                      // Уникальный идентификатор
            get_template_directory_uri().'/assets/js/custom-script.js', // Путь к файлу
            array('jquery'),                              // Зависимости (например, 'jquery')
            null,
            true                                  // Подключать в footer (true) или header (false)
        );
    
        // Подключаем скрипт
        wp_enqueue_script('custom-script');
    }
?>