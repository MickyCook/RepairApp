<?php
/*
 *
 *
 * Template Name: Repair App
 *
 */?>
{
  "username": "<?php the_field('username') ?>",
  "status_image": "<?php the_field('repair_image') ?>",
  "repair_status": "<?php the_field('repair_status') ?>",
  "repair_feed": [
  <?php if(have_rows('repair_feed')): while(have_rows('repair_feed')): the_row(); ?>
    1,
    {
      "feed_date": "<?php echo date('l jS \of F Y h:i:s A'); ?>",
      "feed_image": "<?php the_sub_field('feed_image') ?>",
      "feed_text": "<?php the_sub_field('feed_text') ?>"
    },
  <?php endwhile; endif; ?>
  ]
}
if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_api',
		'title' => 'Api',
		'fields' => array (
			array (
				'key' => 'field_574f0c6c5127e',
				'label' => 'Username',
				'name' => 'username',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_574f0c995127f',
				'label' => 'Repair Image',
				'name' => 'repair_image',
				'type' => 'image',
				'save_format' => 'url',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
			array (
				'key' => 'field_574f0cac51280',
				'label' => 'Repair Status',
				'name' => 'repair_status',
				'type' => 'checkbox',
				'choices' => array (
					'Awaiting Insurance Approval' => 'Awaiting Insurance Approval',
					'Body Work' => 'Body Work',
					'Paint Prep' => 'Paint Prep',
					'Paint' => 'Paint',
					'Reassembley' => 'Reassembley',
					'Ready of pickup' => 'Ready of pickup',
				),
				'default_value' => 'true
	false
	false
	false
	false
	false',
				'layout' => 'vertical',
			),
			array (
				'key' => 'field_574f0d4551281',
				'label' => 'Repair Feed',
				'name' => 'repair_feed',
				'type' => 'repeater',
				'sub_fields' => array (
					array (
						'key' => 'field_574f0d5351282',
						'label' => 'Feed Date',
						'name' => 'feed_date',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'html',
						'maxlength' => '',
					),
					array (
						'key' => 'field_574f0d5d51283',
						'label' => 'Feed Image',
						'name' => 'feed_image',
						'type' => 'image',
						'column_width' => '',
						'save_format' => 'url',
						'preview_size' => 'thumbnail',
						'library' => 'all',
					),
					array (
						'key' => 'field_574f0d6a51284',
						'label' => 'Feed text',
						'name' => 'feed_text',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'html',
						'maxlength' => '',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'table',
				'button_label' => 'Add Row',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-api.php',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}
