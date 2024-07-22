import React from 'react'
import './CSS/COntact.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

function COntact() {
    const [value, setValue] = useState()
  return (
    <>
      <div className="mt-10">
        <div className="ms-contact">
            <h6 className="ms-section-title-con">Get in touch!</h6>
            <div className="container-con">
                <div className="row-con">
                    <div className="col-1-con">
                        <div class="ms-contact__details">
                            <p class="text-con">Contact Us</p>
                            <p class="text1-con">We’re here to help!</p>
                            <ul class="ms-contact__details-list">
                                <li class="d-flex-con mb-2">
                                    <div class="ms-contact__details-list-icon">
                                        <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: '100%'}}>
                                            <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}}/>
                                            </span>
                                            <img alt="phone" classname = "img-con"  src="/assets/icon-phone.756c4055.png" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '20px', height: '20px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                                            <noscript></noscript>
                                        </span>
                                    </div>
                                    <a href="tel:080 6909 6300" class="a-tel-det">080 6909 6300</a>
                                </li>
                                <li class="d-flex-con mb-2">
                                    <div class="ms-contact__details-list-icon">
                                        <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: '100%'}}>
                                            <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}}/>
                                            </span>
                                            <img alt="phone" classname = "img-con"  src="/assets/icon-mail.c4e267da.png" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '20px', height: '20px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                                            <noscript></noscript>
                                        </span>
                                    </div>
                                    <a href="mailto:admission@maven-silicon.com" class="a-tel-det">admission@maven-silicon.com</a>
                                </li>
                                <li class="d-flex-con">
                                    <div class="ms-contact__details-list-icon">
                                        <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: '100%'}}>
                                            <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}}/>
                                            </span>
                                            <img alt="phone" classname = "img-con"  src="/assets/icon-whatsapp.c72491fe.png" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '20px', height: '20px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                                            <noscript></noscript>
                                        </span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=+91 74064 79555&amp;text=Hey,I want to know more about your (services)" target="_blank" rel="noreferrer" class="a-tel-det">+91 74064 79555</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2-con">
                        <div class="ms-contact__form">
                            <form class="ms-ccform" siq_id="autopick_s6jjbyjclq">
                                <div class="sub-row-con">
                                    <div class="sub-col-con mb-4">
                                        <label class="ms-contact__form-label d-block">Your Name*
                                            <input type="text" name="firstname" placeholder="Enter Your Name" class="ms-contact__form-input d-block" value="" fdprocessedid="y91jt"/>
                                        </label>
                                    </div>
                                    <div class="sub-col-con mb-2">
                                        <label class="ms-contact__form-label d-block ">Your Email*
                                            <input type="text" name="email" placeholder="Enter Your Email" class="ms-contact__form-input" value="" fdprocessedid="oj1of3"/>
                                        </label>
                                    </div>
                                    <div class="sub-col-con mb-2">
                                        <label class="ms-contact__form-label d-block">Country*
                                            <select defaultcountry="India" class=" ms-contact__form-input ms-contact__form-input--country w-100" name="country" fdprocessedid="yx2lki">
                                                <option value="">Select Country</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="BN">Brunei Darussalam</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo, Republic of the (Brazzaville)</option>
                                                <option value="CD">Congo, the Democratic Republic of the (Kinshasa)</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Côte d'Ivoire, Republic of</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Curaçao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands (Islas Malvinas)</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern and Antarctic Lands</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia, The</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                <option value="VA">Holy See (Vatican City)</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran, Islamic Republic of</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">Korea, Democratic People's Republic of</option>
                                                <option value="KR">Korea, Republic of</option>
                                                <option value="XK">Kosovo</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">Macedonia, Republic of</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia, Federated States of</option>
                                                <option value="MD">Moldova</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PS">Palestine, State of</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Réunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russian Federation</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="BL">Saint Barthélemy</option>
                                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="MF">Saint Martin</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome and Principe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten (Dutch part)</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia and South Sandwich Islands</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SZ">Eswatini</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syrian Arab Republic</option>
                                                <option value="TW">Taiwan</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania, United Republic of</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">United States Minor Outlying Islands</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                <option value="VN">Vietnam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.S.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="sub-col-con mb-2">
                                        <label class="ms-contact__form-label">State*
                                            <select class=" ms-contact__form-input ms-contact__form-input--country" whitelist="[object Object]" blacklist="[object Object]" name="region" fdprocessedid="uuv7lg">
                                                <option value="">Select Region</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Ladakh">Ladakh</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="sub-col-con mb-2">   
                                        <label class="ms-contact__form-label">Mobile* </label>
                                        <PhoneInput  defaultCountry="IN" value={value} onChange={setValue}/>
                                    </div>
                                    <div class="sub--col-con">
                                        <label class="ms-contact__form-label">Your Message
                                            <textarea name="message" placeholder="Write your message here" class="ms-contact__form-input w-100" rows="4"></textarea>
                                        </label>
                                    </div>
                                    <input type="hidden" name="Source" value="Maven"/>
                                    <input type="hidden" name="channel" value="Contact Us"/>
                                    <input type="hidden" name="mx_Sub_Source" value="Contact Us"/>
                                    <input type="hidden" name="oldSource" value="test"/>
                                    <input type="hidden" name="mx_Website_url" value="https://www.maven-silicon.com/"/>
                                    <div>
                                        <div>
                                            <div style={{width: '304px', height: '78px'}}>
                                                <div>
                                                    <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-dstxa59rkvw8" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdzgyUkAAAAADv9G4Fc6Wv2lDbWZvAMSV6S_icY&amp;co=aHR0cHM6Ly93d3cubWF2ZW4tc2lsaWNvbi5jb206NDQz&amp;hl=en&amp;type=image&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=d8kfovkpnh28"></iframe>
                                                </div>
                                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub-col1-con">
                                        <a class="cursor-pointer">
                                            <button class="ms-button__primary" style={{background: 'rgb(95, 184, 88)'}} fdprocessedid="3dcbpj">
                                                <div class="ms-button__primary-name">Submit</div>
                                                <div class="ms-button__primary-arrow">
                                                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                        <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2713%27%20height=%279%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px'}}/>
                                                        </span>
                                                        <img alt="" src="/assets/arrow-green.30b88e9c.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
                                                    </span>
                                                </div>
                                            </button>
                                        </a>
                                        <div class="d-inline-block"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default COntact
