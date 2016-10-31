<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
The reCaptcha server keys and API locations

Obtain your own keys from:
http://www.recaptcha.net
*/
$config['recaptcha'] = array(
  'public'=>'6LdWXiUTAAAAAAhXi22cg8yiZdthbQ8ZKHnyLOvv',
  'private'=>'6LdWXiUTAAAAAAkmH2z6tRhFXSot9l6wUA5LerKp',
  'RECAPTCHA_API_SERVER' =>'https://www.google.com/recaptcha/api',
  'RECAPTCHA_API_SECURE_SERVER'=>'https://www.google.com/recaptcha/api',
  'RECAPTCHA_VERIFY_SERVER' =>'www.google.com',
  'RECAPTCHA_SIGNUP_URL' => 'https://www.google.com/recaptcha/admin/create',
  'theme' => 'white'
);