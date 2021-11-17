import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../reducers/auth";

const axios = require ('axios');

export default function Navbar (){
	const dispatch = useDispatch();

	const state = useSelector((state) => {
		return {
			isAuthorized: state.authenticationReducer.userId,
		};
	});

	const sendLogoutRequest = () => {
		axios.delete('/sessions/deleteSession',{
			data:
			{
				"token": localStorage.getItem("token")
			}
		}).then (
			(response) => {
				dispatch(authentication.saveAuth(null));
			}
		)
	}
    return (
      <div className="iq-sidebar  sidebar-default ">
      <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                  <li className="active">
                      <a href="index.html" className=" "> 
                          <i className="las la-newspaper"></i><span>Newsfeed</span>
                      </a>
                  </li>
                  <li className="">
                     <a href="../app/profile.html" className=" ">
                         <i className="las la-user"></i><span>Profile</span>
                      </a>
                  </li>
                  <li className="">
                     <a href="friend-list.html" className=" ">
                         <i className="las la-user-friends"></i><span>Friend List</span>
                      </a>
                  </li>
                  <li className="">
                     <a href="friend-profile.html" className=" ">
                         <i className="las la-user-friends"></i><span>Friend Profile</span>
                      </a>
                  </li>
                  <li className="">
                     <a href="../app/group.html" className=" ">
                         <i className="las la-users"></i><span>Group</span>
                      </a>
                  </li>
                  <li className=" ">
                      <a href="../app/profile-images.html" className=" ">
                          <i className="las la-image"></i><span>Profile Image</span>
                      </a>
                  </li>
                  <li className=" ">
                      <a href="../app/profile-videos.html" className=" ">
                          <i className="las la-video"></i><span>Profile Video</span>
                      </a>
                  </li>
                   <li className=" ">
                      <a href="../app/profile-event.html" className=" ">
                          <i className="las la-film"></i><span>Profile Events</span>
                      </a>
                  </li>
                   <li className=" ">
                      <a href="../app/profile-badges.html" className=" ">
                          <i className="las la-certificate"></i><span>Profile Badges</span>
                      </a>
                  </li>
                   <li className=" ">
                      <a href="../app/profile-forum.html" className=" ">
                          <i className="lab la-wpforms"></i><span>Profile Forum</span>
                      </a>
                  </li>
                  <li className=" ">
                     <a href="notification.html" className=" ">
                         <i className="las la-bell"></i><span>Notification</span>
                      </a>
                  </li>
                  <li className=" ">
                      <a href="file.html" className=" ">
                          <i className="las la-file"></i><span>Files</span>
                      </a>
                  </li>
                  <li className=" ">
                       <a href="friend-request.html" className=" ">
                          <i className="las la-anchor"></i><span>Friend Request</span>
                      </a>
                  </li>
                  <li className=" ">
                       <a href="../app/chat.html" className=" ">
                          <i className="lab la-rocketchat"></i><span>Chat</span>
                      </a>
                  </li>
                  <li className=" ">
                      <a href="../app/todo.html" className=" ">
                          <i className="las la-check-circle"></i><span>Todo</span>
                      </a>
                  </li>
                  <li className=" ">
                     <a href="calendar.html" className=" ">
                         <i className="las la-calendar"></i><span>Calendar</span>
                      </a>
                  </li>
                  <li className=" ">
                     <a href="birthday.html" className=" ">
                         <i className="las la-birthday-cake"></i><span>Birthday</span>
                      </a>
                  </li>
                  <li className=" ">
                      <a href="weather.html" className=" ">
                          <i className="ri-snowy-line"></i><span>Weather</span>
                      </a>
                  </li>
                  <li className=" ">
                       <a href="music.html" className=" ">
                          <i className="ri-play-circle-line"></i><span>Music</span>
                      </a>
                  </li>
                   <li className=" ">
                      <a href="#blog" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false">
                          <i className="lab la-blogger"></i><span>Blog</span><i
                              className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </a>
                      <ul id="blog" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                          <li className="">
                              <a href="blog-grid.html"><i className="  ri-grid-line"></i>Blog Grid</a>
                          </li>
                          <li className="">
                              <a href="blog-list.html"><i className="ri-list-check-2"></i>Blog List</a>
                          </li>
                          <li className="">
                              <a href="blog-detail.html"><i className="ri-information-line"></i>Blog Detail</a>
                          </li>
                      </ul>
                  </li>
                   <li className=" ">
                      <a href="#store" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false">
                          <i className="las la-store"></i><span>Store</span><i
                              className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </a>
                      <ul id="store" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                          <li className="">
                              <a href="store-category-grid.html"><i className="  ri-grid-line"></i>Category Grid</a>
                          </li>
                          <li className="">
                              <a href="store-category-list.html"><i className="ri-list-check-2"></i>Category list</a>
                          </li>
                          <li className="">
                              <a href="store-detail.html"><i className="ri-information-line"></i>Store Detail</a>
                          </li>
                          <li className="">
                              <a href="store-checkout.html"><i className="ri-chat-check-line"></i>Checkout</a>
                          </li>
                      </ul>
                  </li>
                  <li className=" ">
                      <a href="#mailbox" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false">
                          <i className="ri-mail-line"></i><span>Email</span><i
                              className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </a>
                      <ul id="mailbox" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                          <li className="">
                              <a href="../app/email.html"><i className="  ri-inbox-line"></i>Inbox</a>
                          </li>
                          <li className="">
                              <a href="../app/email-compose.html"><i className="ri-edit-line"></i>Email Compose</a>
                          </li>
                      </ul>
                  </li>
                   <li className="">
                      <a href="#ui-elements" data-bs-toggle="collapse" className="  collapsed" 
                          aria-expanded="false"><i className="ri-focus-2-line"></i><span>Ui-Elements</span><i
                              className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="ui-elements" className="iq-submenu collapse"
                      data-bs-parent="#iq-sidebar-toggle">
                          <li className="">
                              <a href="#ui-kit"  data-bs-toggle="collapse" className="  collapsed"
                                  aria-expanded="false"><i className="ri-pencil-ruler-line"></i><span>UI Kit</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="ui-kit" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                  <li className="">
                                      <a href="ui-color.html"><i className="ri-font-color"></i>Colors</a>
                                  </li>
                                  <li className=" ">
                                      <a href="ui-typography.html"><i className="ri-text"></i>Typography</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-alerts.html"><i className="ri-alert-line"></i>Alerts</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-badges.html"><i className="ri-building-3-line"></i>Badges</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-breadcrumb.html"><i className="ri-menu-2-line"></i>Breadcrumb</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-buttons.html"><i className="ri-checkbox-blank-line"></i>Buttons</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-cards.html"><i className="ri-bank-card-line"></i>Cards</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-carousel.html"><i className="ri-slideshow-line"></i>Carousel</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-embed-video.html"><i className="ri-slideshow-2-line"></i>Video</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-grid.html"><i className="ri-grid-line"></i>Grid</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-images.html"><i className="ri-image-line"></i>Images</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-list-group.html"><i className="ri-file-list-3-line"></i>list
                                          Group</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-modal.html"><i className="ri-stop-mini-line"></i>Modal</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-notifications.html"><i className="ri-notification-line"></i>Notifications</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-pagination.html"><i className="ri-pages-line"></i>Pagination</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-popovers.html"><i className="ri-folder-shield-2-line"></i>Popovers</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-progressbars.html"><i className="ri-battery-low-line"></i>Progressbars</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-tabs.html"><i className="ri-database-line"></i>Tabs</a>
                                  </li>
                                  <li className="">
                                      <a href="ui-tooltips.html"><i className="ri-record-mail-line"></i>Tooltips</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="">
                              <a href="#forms" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-profile-line"></i><span>Forms</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="forms" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                  <li className="">
                                      <a href="form-layout.html"><i className="ri-tablet-line"></i>Form Elements</a>
                                  </li>
                                  <li className="">
                                      <a href="form-validation.html"><i className="ri-device-line"></i>Form
                                          Validation</a></li>
                                  <li className="">
                                      <a href="form-switch.html"><i className="ri-toggle-line"></i>Form Switch</a>
                                  </li>
                                  <li className="">
                                      <a href="form-chechbox.html"><i className="ri-checkbox-line"></i>Form
                                          Checkbox</a></li>
                                  <li className="">
                                      <a href="form-radio.html"><i className="ri-radio-button-line"></i>Form Radio</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="">
                              <a href="#wizard-form" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-archive-drawer-line"></i><span>Forms
                                      Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="wizard-form" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                  <li className="">
                                      <a href="form-wizard.html"><i className="ri-clockwise-line"></i>Simple Wizard</a>
                                  </li>
                                  <li className="">
                                      <a href="form-wizard-validate.html"><i className="ri-clockwise-2-line"></i>Validate Wizard</a>
                                  </li>
                                  <li className="">
                                      <a href="form-wizard-vertical.html"><i className="ri-anticlockwise-line"></i>Vertical Wizard</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="">
                              <a href="#tables" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-table-line"></i><span>Table</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="tables" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                  <li className="">
                                      <a href="tables-basic.html"><i className="ri-table-line"></i>Basic Tables</a>
                                  </li>
                                  <li className="">
                                      <a href="data-table.html"><i className="ri-database-line"></i>Data Table</a>
                                  </li>
                                  <li className="">
                                      <a href="table-editable.html"><i className="ri-refund-line"></i>Editable Table</a></li>
                              </ul>
                          </li>
                          <li className="">
                              <a href="#icons" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-list-check"></i><span>Icons</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="icons" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                  <li className="">
                                      <a href="icon-fontawesome-5.html"><i className="ri-facebook-fill"></i>Font Awesome 5</a>
                                  </li>
                                  <li className="">
                                      <a href="icon-lineawesome.html"><i className="ri-keynote-line"></i>line Awesome</a>
                                  </li>
                                  <li className="">
                                      <a href="icon-remixicon.html"><i className="ri-remixicon-line"></i>Remixicon</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li className="">
                      <a href="#pages" className="  collapsed" data-bs-toggle="collapse"
                          aria-expanded="false"><i className="ri-pages-line"></i><span>Pages</span><i
                              className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="pages" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                          <li className="">
                              <a href="#authentication" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-pages-line"></i><span>Authentication</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="authentication" className="iq-submenu collapse" data-bs-parent="#pages">
                                  <li className="">
                                      <a href="sign-in.html"><i className="ri-login-box-line"></i>Login</a>
                                  </li>
                                  <li className="">
                                      <a href="sign-up.html"><i className="ri-login-circle-line"></i>Register</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-recoverpw.html"><i className="ri-record-mail-line"></i>Recover Password</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-confirm-mail.html"><i className="ri-file-code-line"></i>Confirm Mail</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-lock-screen.html"><i className="ri-lock-line"></i>Lock Screen</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="">
                              <a href="#extra-pages" className="  collapsed" data-bs-toggle="collapse"
                                  aria-expanded="false"><i className="ri-pantone-line"></i><span>Extra Pages</span><i
                                      className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                              <ul id="extra-pages" className="iq-submenu collapse" data-bs-parent="#pages">
                                  <li className="">
                                      <a href="pages-timeline.html"><i className="ri-map-pin-time-line"></i>Timeline</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-invoice.html"><i className="ri-question-answer-line"></i>Invoice</a>
                                  </li>
                                  <li className="">
                                      <a href="blank-page.html"><i className="ri-invision-line"></i>Blank Page</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-error.html"><i className="ri-error-warning-line"></i>Error 404</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-error-500.html"><i className="ri-error-warning-line"></i>Error 500</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-pricing.html"><i className="ri-price-tag-line"></i>Pricing</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-pricing-one.html"><i className="ri-price-tag-2-line"></i>Pricing 1</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-maintenance.html"><i className="ri-archive-line"></i>Maintenance</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-comingsoon.html"><i className="ri-mastercard-line"></i>Coming Soon</a>
                                  </li>
                                  <li className="">
                                      <a href="pages-faq.html"><i className="ri-compasses-line"></i>Faq</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
              </nav>
              <div className="p-5"></div>
          </div>
      </div>

    )
}

