class EmailTemplateGameHomeWorkCompletes {
    data: any;

    constructor(data: any) {
        this.data = data;
    }

    renderHtml() {
        return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="format-detection" content="telephone=no">
          </head>
          <body
            style="-moz-box-sizing:border-box;-moz-osx-font-smoothing:antialiased;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;background:#17c3ff!important;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important"
          >
            <style>
              @media only screen {
                html {
                  min-height: 100%;
                  background: #f3f3f3;
                }
              }
              @media only screen and (max-width: 596px) {
                .small-float-center {
                  margin: 0 auto !important;
                  float: none !important;
                  text-align: center !important;
                }
                .small-text-center {
                  text-align: center !important;
                }
                .small-text-left {
                  text-align: left !important;
                }
                .small-text-right {
                  text-align: right !important;
                }
              }
              @media only screen and (max-width: 596px) {
                .hide-for-large {
                  display: block !important;
                  width: auto !important;
                  overflow: visible !important;
                  max-height: none !important;
                  font-size: inherit !important;
                  line-height: inherit !important;
                }
              }
              @media only screen and (max-width: 596px) {
                table.body table.container .hide-for-large,
                table.body table.container .row.hide-for-large {
                  display: table !important;
                  width: 100% !important;
                }
              }
              @media only screen and (max-width: 596px) {
                table.body table.container .callout-inner.hide-for-large {
                  display: table-cell !important;
                  width: 100% !important;
                }
              }
              @media only screen and (max-width: 596px) {
                table.body table.container .show-for-large {
                  display: none !important;
                  width: 0;
                  mso-hide: all;
                  overflow: hidden;
                }
              }
              @media only screen and (max-width: 596px) {
                table.body img {
                  width: auto;
                  height: auto;
                }
                table.body center {
                  min-width: 0 !important;
                }
                table.body .container {
                  width: 95% !important;
                }
                table.body .column,
                table.body .columns {
                  height: auto !important;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding-left: 16px !important;
                  padding-right: 16px !important;
                }
                table.body .column .column,
                table.body .column .columns,
                table.body .columns .column,
                table.body .columns .columns {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.body .collapse .column,
                table.body .collapse .columns {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                td.small-1,
                th.small-1 {
                  display: inline-block !important;
                  width: 8.33333% !important;
                }
                td.small-2,
                th.small-2 {
                  display: inline-block !important;
                  width: 16.66667% !important;
                }
                td.small-3,
                th.small-3 {
                  display: inline-block !important;
                  width: 25% !important;
                }
                td.small-4,
                th.small-4 {
                  display: inline-block !important;
                  width: 33.33333% !important;
                }
                td.small-5,
                th.small-5 {
                  display: inline-block !important;
                  width: 41.66667% !important;
                }
                td.small-6,
                th.small-6 {
                  display: inline-block !important;
                  width: 50% !important;
                }
                td.small-7,
                th.small-7 {
                  display: inline-block !important;
                  width: 58.33333% !important;
                }
                td.small-8,
                th.small-8 {
                  display: inline-block !important;
                  width: 66.66667% !important;
                }
                td.small-9,
                th.small-9 {
                  display: inline-block !important;
                  width: 75% !important;
                }
                td.small-10,
                th.small-10 {
                  display: inline-block !important;
                  width: 83.33333% !important;
                }
                td.small-11,
                th.small-11 {
                  display: inline-block !important;
                  width: 91.66667% !important;
                }
                td.small-12,
                th.small-12 {
                  display: inline-block !important;
                  width: 100% !important;
                }
                .column td.small-12,
                .column th.small-12,
                .columns td.small-12,
                .columns th.small-12 {
                  display: block !important;
                  width: 100% !important;
                }
                table.body td.small-offset-1,
                table.body th.small-offset-1 {
                  margin-left: 8.33333% !important;
                  margin-left: 8.33333% !important;
                }
                table.body td.small-offset-2,
                table.body th.small-offset-2 {
                  margin-left: 16.66667% !important;
                  margin-left: 16.66667% !important;
                }
                table.body td.small-offset-3,
                table.body th.small-offset-3 {
                  margin-left: 25% !important;
                  margin-left: 25% !important;
                }
                table.body td.small-offset-4,
                table.body th.small-offset-4 {
                  margin-left: 33.33333% !important;
                  margin-left: 33.33333% !important;
                }
                table.body td.small-offset-5,
                table.body th.small-offset-5 {
                  margin-left: 41.66667% !important;
                  margin-left: 41.66667% !important;
                }
                table.body td.small-offset-6,
                table.body th.small-offset-6 {
                  margin-left: 50% !important;
                  margin-left: 50% !important;
                }
                table.body td.small-offset-7,
                table.body th.small-offset-7 {
                  margin-left: 58.33333% !important;
                  margin-left: 58.33333% !important;
                }
                table.body td.small-offset-8,
                table.body th.small-offset-8 {
                  margin-left: 66.66667% !important;
                  margin-left: 66.66667% !important;
                }
                table.body td.small-offset-9,
                table.body th.small-offset-9 {
                  margin-left: 75% !important;
                  margin-left: 75% !important;
                }
                table.body td.small-offset-10,
                table.body th.small-offset-10 {
                  margin-left: 83.33333% !important;
                  margin-left: 83.33333% !important;
                }
                table.body td.small-offset-11,
                table.body th.small-offset-11 {
                  margin-left: 91.66667% !important;
                  margin-left: 91.66667% !important;
                }
                table.body table.columns td.expander,
                table.body table.columns th.expander {
                  display: none !important;
                }
                table.body .right-text-pad,
                table.body .text-pad-right {
                  padding-left: 10px !important;
                }
                table.body .left-text-pad,
                table.body .text-pad-left {
                  padding-right: 10px !important;
                }
                table.menu {
                  width: 100% !important;
                }
                table.menu td,
                table.menu th {
                  width: auto !important;
                  display: inline-block !important;
                }
                table.menu.small-vertical td,
                table.menu.small-vertical th,
                table.menu.vertical td,
                table.menu.vertical th {
                  display: block !important;
                }
                table.menu[align="center"] {
                  width: auto !important;
                }
                table.button.small-expand,
                table.button.small-expanded {
                  width: 100% !important;
                }
                table.button.small-expand table,
                table.button.small-expanded table {
                  width: 100%;
                }
                table.button.small-expand table a,
                table.button.small-expanded table a {
                  text-align: center !important;
                  width: 100% !important;
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.button.small-expand center,
                table.button.small-expanded center {
                  min-width: 0;
                }
              }
            </style>
            <table
              class="body"
              data-made-with-foundation=""
              style="-moz-osx-font-smoothing:antialiased;-webkit-font-smoothing:antialiased;background:#17c3ff!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%"
            >
              <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                  <td
                    class="float-center"
                    align="center"
                    valign="top"
                    style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;float:none;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word"
                  >
                    <center data-parsed="" style="min-width:580px;width:100%">
                      <table
                        class="spacer float-center"
                        style="border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:100%"
                      >
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td
                              height="16px"
                              style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        class="container header float-center"
                        style="background:#17c3ff;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px"
                      >
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td
                              style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                            >
                              <table
                                class="row"
                                style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%"
                              >
                                <tbody>
                                  <tr
                                    style="padding:0;text-align:left;vertical-align:top"
                                  >
                                    <th
                                      class="small-12 large-12 columns first last"
                                      style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px"
                                    >
                                      <table
                                        style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="padding:0;text-align:left;vertical-align:top"
                                          >
                                            <th
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"
                                            >
                                              <center
                                                style="min-width:532px;width:100%"
                                              >
                                                <img
                                                  class="logo"
                                                  src="http://gameasset.s3.amazonaws.com/EmailTemplate/logo.png"
                                                  style="-ms-interpolation-mode:bicubic;clear:both;display:inline;max-width:230px;outline:0;padding-top:20px;text-decoration:none;width:100%"
                                                />
                                              </center>
                                            </th>
                                            <th
                                              class="expander"
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"
                                            ></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        class="container body-border float-center"
                        style="background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px"
                      >
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td
                              style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                            >
                              <table
                                class="row"
                                style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%"
                              >
                                <tbody>
                                  <tr
                                    style="padding:0;text-align:left;vertical-align:top"
                                  >
                                    <th
                                      class="small-12 large-12 columns first last"
                                      style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px"
                                    >
                                      <table
                                        style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="padding:0;text-align:left;vertical-align:top"
                                          >
                                            <th
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"
                                            >
                                              <table
                                                class="spacer"
                                                style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="padding:0;text-align:left;vertical-align:top"
                                                  >
                                                    <td
                                                      height="32px"
                                                      style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:32px;font-weight:400;hyphens:auto;line-height:32px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
        
                                          ${this.renderData()}
        
                                              <table
                                                class="spacer"
                                                style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="padding:0;text-align:left;vertical-align:top"
                                                  >
                                                    <td
                                                      height="16px"
                                                      style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
        
                                              <p
                                                class="text-center"
                                                style="color:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                Did you know our parent app is available
                                                on both iOS and Android devices?
                                              </p>
                                              <p
                                                class="text-center"
                                                style="color:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                Download now!
                                              </p>
        
                                              <center
                                                data-parsed=""
                                                style="min-width:532px;width:100%"
                                              >
                                                <table
                                                  align="center"
                                                  class="menu float-center"
                                                  style="border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:auto!important"
                                                >
                                                  <tbody>
                                                    <tr
                                                      style="padding:0;text-align:left;vertical-align:top"
                                                    >
                                                      <td
                                                        style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                                                      >
                                                        <table
                                                          style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                                        >
                                                          <tbody>
                                                            <tr
                                                              style="padding:0;text-align:left;vertical-align:top"
                                                            >
                                                              <th
                                                                class="menu-item float-center"
                                                                align="center"
                                                                style="color:#0a0a0a;float:none;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-right:10px;text-align:center"
                                                              >
                                                                <a
                                                                  href="https://itunes.apple.com/app/apple-store/id1392836451"
                                                                  target="_blank"
                                                                  class="badge"
                                                                  style="color:#2199e8;display:block;float:left;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;max-width:150px;padding:0;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:0;text-align:left;text-decoration:none;width:100%"
                                                                  ><img
                                                                    class="badge"
                                                                    src="http://gameasset.s3.amazonaws.com/EmailTemplate/appstore.png"
                                                                    style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;float:left;max-width:150px;outline:0;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;text-decoration:none;width:100%"/></a
                                                                ><a
                                                                  href="https://play.google.com/store/apps/details?id=com.starmathsonline.parent"
                                                                  target="_blank"
                                                                  class="badge"
                                                                  style="color:#2199e8;display:block;float:left;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;max-width:150px;padding:0;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:0;text-align:left;text-decoration:none;width:100%"
                                                                  ><img
                                                                    class="badge"
                                                                    src="http://gameasset.s3.amazonaws.com/EmailTemplate/playstore.png"
                                                                    style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;float:left;max-width:150px;outline:0;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;text-decoration:none;width:100%"
                                                                /></a>
                                                              </th>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </center>
                                            </th>
                                            <th
                                              class="expander"
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"
                                            ></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="spacer"
                                style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                              >
                                <tbody>
                                  <tr
                                    style="padding:0;text-align:left;vertical-align:top"
                                  >
                                    <td
                                      height="16px"
                                      style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </center>
                    
                    <center data-parsed="" style="min-width:580px;width:100%">
                      <table
                        class="spacer float-center"
                        style="border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:100%"
                      >
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td
                              height="16px"
                              style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        class="container header float-center"
                        style="background:#17c3ff;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px;"
                      >
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td
                              style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"
                            >
                              <table
                                class="row"
                                style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%"
                              >
                                <tbody>
                                  <tr
                                    style="padding:0;text-align:left;vertical-align:top"
                                  >
                                    <th
                                      class="small-12 large-12 columns first last"
                                      style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px"
                                    >
                                      <table
                                        style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"
                                      >
                                        <tbody>
                                          <tr
                                            style="padding:0;text-align:left;vertical-align:top"
                                          >
                                            <th
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"
                                            >
                                              <p
                                                class="text-center"
                                                style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:12.5pt;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                Kind Regards,
                                              </p>
                                              <p
                                                class="text-center"
                                                style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:12.5pt;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                Team S.T.A.R
                                              </p>
                                              <p
                                                class="text-center"
                                                style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:12.5pt;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                E:
                                                <a
                                                  style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none"
                                                  href="mailto:support@starmathsonline.com.au"
                                                  >support@starmathsonline.com.au</a
                                                >
                                              </p>
                                              <p
                                                class="text-center"
                                                style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:12.5pt;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                W:
                                                <a
                                                  style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none"
                                                  href="https://starmathsonline.com.au/"
                                                  >starmathsonline.com.au</a
                                                >
                                              </p>
                                              <p
                                                class="text-center"
                                                style="color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:12.5pt;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center"
                                              >
                                                Learn, Practise, Grow!
                                              </p>
                                              ${this.renderUnsubscribe()}
                                            </th>
                                            <th
                                              class="expander"
                                              style="color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"
                                            ></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </body>
        </html>
        
      `;
    }

    renderData() {
        let data = this.data;
        if (!data)
            return ''; 
        let str = `     <center
        data-parsed=""
        style="min-width:532px;width:100%"
      >
        <h4
          class="text-center"
          style="color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal"
        >
          Hi ${data.FirstNameParent},
        </h4>
      </center>
      

     
      <table
        style="width: 80%; height: 30px; margin-bottom:16px;margin-left:auto;margin-right:auto;background-color: #ffffff;"
        cellspacing="1"
        cellpadding="15"
      >
        <tbody>
          <tr>
            <td
              colspan="2"
              style="height: 25px;text-align: center;"
            >
            ${data.FirstNameStudent} has completed
              this week's homework exercise!
            </td>
          </tr>
        </tbody>
      </table>

      <table
        style="width: 80%; height: 300px;margin-bottom:16px;margin-left:auto;margin-right:auto;"
        cellspacing="0"
        cellpadding="7"
      >
        <tbody>
          <tr>
            <td
              style="height: 50px;text-align: center;"
            >
              <strong
                >${data.FirstNameStudent} scored
                ${data.StudentPercent}% on their
                first attempt.</strong
              >
            </td>
          </tr>
          <tr>
            <td style="height: 200px;">
              <table
                style="width: 95%; height: 200px; margin-left: auto; margin-right: auto;"
                cellspacing="3"
                cellpadding="10"
              >
                <tbody>
                  <tr>
                    <td
                      style="text-align: center"
                    >
                      <table
                        class="callout"
                        style="width: 80%;  margin-left:auto;margin-right:auto;"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style=" width: 90%; text-align: left; vertical-align: middle; "
                            >
                            <center>
                              <img src="https://gameasset.s3.amazonaws.com/EmailTemplate/Assessment/Asset_163.png" style="width: 255px;margin-bottom: 5px;"/>
                            </center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="text-align: center;"
                    >
                    
                      Log on to your parent
                      portal and send ${data.FirstNameStudent} an e-sticker
                      now!
                    </td>
                  </tr>
                  <tr>
                    <td>
                     
                      <center>
                        <a
                          href="https://parent.starmathsonline.com.au/"
                          style="background-color:#f68f3b;border-radius:30px;color:#fff;display:block;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;margin-top:10px; padding:10px 20px;text-align:center;text-decoration:none;width:150px"
                          >Log on</a
                        >
                      </center>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>`;

        return str;
    }

    renderUnsubscribe(){
      let data = this.data;
      if (!data)
          return ''; 
      let str = `
      <center>
        <a
          href="https://parent.starmathsonline.com.au/Manage/Unsubscribe?uid=${data.userId}"
          style="color:#fff;display:block;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;margin-top:10px; padding:5px;text-align:center;text-decoration:none;width:120px; font-weight: bold;text-decoration: underline;"
          >Unsubscribe</a
        >
      </center>`;

      return str;
    }
}

Object.seal(EmailTemplateGameHomeWorkCompletes);
export default EmailTemplateGameHomeWorkCompletes; 