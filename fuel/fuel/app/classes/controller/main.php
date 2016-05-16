<?php

class Controller_Main extends Controller_Template
{
	public function action_index()
	{
		$this->template->title = 'index';
    $this->template->content = View::forge('main/index');
	}

	public function action_404()
	{
		$this->template->title = '404';
		$this->template->content = View::forge('main/404');
	}
}
