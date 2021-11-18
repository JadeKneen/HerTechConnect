/*  <!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	//Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	//   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file.
</style>
<div id="mc_embed_signup">
<form action="https://hertechconnect.us20.list-manage.com/subscribe/post?u=80d598edf7f6f2e1662fd701a&amp;id=1a52fa02ff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to HerTechConnect Newsletter</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group size1of2">
	<label for="mce-BIRTHDAY-month">Birthday </label>
	<div class="datefield">
		<span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
		<span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
		<span class="small-meta nowrap">( mm / dd )</span>
	</div>
</div>	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_80d598edf7f6f2e1662fd701a_1a52fa02ff" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/hNnx15" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7_dtp.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	// Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	//   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. 
</style>
<div id="mc_embed_signup">
<form action="https://hertechconnect.us20.list-manage.com/subscribe/post?u=80d598edf7f6f2e1662fd701a&amp;id=1a52fa02ff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Subscribe</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_80d598edf7f6f2e1662fd701a_1a52fa02ff" tabindex="-1" value=""></div>
        <div class="clear foot">
           <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
        </div>
	<p><a href="http://eepurl.com/hNnx15" title="Mailchimp - email marketing made easy and fun"><img class="referralBadge" src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
*/
/*function clickHandler() {
      alert("something");
      
}


function Subscribe() {
  return (
	<button onClick={clickHandler}>
  Subscribe
</button>
  );
}

export default Subscribe;
*/

import React from "react";
// import ScriptTag from "react-script-tag";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {Container as ContainerBase } from "components/misc/Layouts.js"

const Container = tw(ContainerBase)`bg-purple-100 -mx-5`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`


const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

export default ({
  subheading = "To get monthly updates",
  heading = "Sign-up for HerTechConnect Newsletter",
  description = "",
  submitButtonText = "Subscribe",
  formAction = "https://hertechconnect.us20.list-manage.com/subscribe/post?u=80d598edf7f6f2e1662fd701a&amp;id=1a52fa02ff",
  formMethod = "post",
  formId = "mc-embedded-subscribe-form",
  formName = "mc-embedded-subscribe-form",
  formClass = "validate",
  formTarget = "_blank",
  textOnLeft = true,
  scriptType = "text/javascript",
  scriptSrc2="(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <Content>
		<FormColumn>
            <Form action={formAction} method={formMethod} id={formId} name={formName} class={formClass} target={formTarget} novalidate>
			  <Actions>
              <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Your E-mail Address" />
			  <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
            </Actions>
            </Form>
          </FormColumn>
      </Content>
    </Container>
  );
};
