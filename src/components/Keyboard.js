document.addEventListener("keydown", (e) => {
  if (e.keyCode === 9) e.preventDefault();
  console.log(e);
  const keyCode = e.keyCode;
  if (keyCode) {
    const keyPress = document.getElementById(`key-${keyCode}`);
    keyPress.classList.add("key-press");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 9) e.preventDefault();
  const keyCode = e.keyCode;
  if (keyCode) {
    const keyPress = document.getElementById(`key-${keyCode}`);
    keyPress.classList.remove("key-press");
  }
});

function Keyboard() {
  return (
    <div className="keyboard">
      <svg
        version="1.1"
        id="keyboard"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        style={{ enableBackground: "new 0 0 612 792" }}
      >
        <style>
          {`
            .st0 {
              fill: none;
              stroke: #000000;
              stroke-width: 0.5;
              stroke-miterlimit: 10;
            }

            .key-press{
              fill:red;
            }

            .st1 {
              font-family: 'Open Sans';
            }

            .st2 {
              font-size: 9px;
            }

            .st3 {
              font-size: 5px;
            }

            .st4 {
              stroke: #000000;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }
          `}
        </style>
        <g id="key-space">
          <path
            id="key-32"
            class="st0"
            d="M232.06,111.91H85.13c-1.1,0-2-0.9-2-2V95.72
		c0-1.1,0.9-2,2-2h146.93c1.1,0,2,0.9,2,2v14.19C234.06,111.01,233.16,111.91,232.06,111.91z"
          />
        </g>
        <g id="pinky-left">
          <g id="key-tilde">
            <path
              class="st0"
              id="key-192"
              d="M29.8,25.23H6.17c-1.1,0-2-0.9-2-2V9.04c0-1.1,0.9-2,2-2H29.8c1.1,0,2,0.9,2,2v14.19
			C31.8,24.33,30.9,25.23,29.8,25.23z"
            />
            <text transform="matrix(1 0 0 1 16.6509 18.5403)" class="st1 st2">
              |
            </text>
          </g>
          <g id="key-tab">
            <path
              id="key-9"
              class="st0"
              d="M34.34,46.92H6.17c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h28.17c1.1,0,2,0.9,2,2v14.19
			C36.34,46.03,35.44,46.92,34.34,46.92z"
            />
            <text transform="matrix(1 0 0 1 11.238 39.0316)" class="st1 st3">
              TAB
            </text>
          </g>
          <g id="key-caps-lock">
            <path
              id="key-20"
              class="st0"
              d="M39.16,68.59H6.17c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h32.99c1.1,0,2,0.9,2,2v14.19
			C41.16,67.69,40.26,68.59,39.16,68.59z"
            />
            <text transform="matrix(1 0 0 1 11.238 60.6932)" class="st1 st3">
              CAPS LOCK
            </text>
          </g>
          <g id="key-lshift">
            <path
              id="key-16"
              class="st0"
              d="M29.8,90.25H6.17c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2H29.8c1.1,0,2,0.9,2,2v14.19
			C31.8,89.35,30.9,90.25,29.8,90.25z"
            />
            <text transform="matrix(1 0 0 1 11.2383 82.3548)" class="st1 st3">
              SHIFT
            </text>
          </g>
          <g id="key-left-control">
            <path
              id="key-17"
              class="st0"
              d="M51.36,111.91H6.17c-1.1,0-2-0.9-2-2V95.72
			c0-1.1,0.9-2,2-2h45.2c1.1,0,2,0.9,2,2v14.19C53.36,111.01,52.47,111.91,51.36,111.91z"
            />
            <text transform="matrix(1 0 0 1 11.238 104.0159)" class="st1 st3">
              CTRL
            </text>
          </g>
          <g id="key-left-alt">
            <path
              class="st0"
              id="key-18"
              d="M78.11,111.91H58.38c-1.1,0-2-0.9-2-2V95.72c0-1.1,0.9-2,2-2h19.73c1.1,0,2,0.9,2,2v14.19
			C80.11,111.01,79.21,111.91,78.11,111.91z"
            />
            <text transform="matrix(1 0 0 1 64.5781 104.0158)" class="st1 st3">
              ALT
            </text>
          </g>
          <g id="key-angle-bracket">
            <path
              class="st0"
              d="M50.06,90.74H35.87c-1.1,0-2-0.9-2-2V74.55c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C52.06,89.84,51.17,90.74,50.06,90.74z"
            />
            <text transform="matrix(1 0 0 1 40.6328 84.0455)" class="st1 st2">
              &lt;
            </text>
          </g>
        </g>
        <g id="pinky-rigth">
          <g id="key-single-quote_00000042694146918227826160000013947319644386312603_">
            <path
              class="st0"
              d="M269.34,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C271.34,24.37,270.44,25.26,269.34,25.26z"
            />
            <text transform="matrix(1 0 0 1 260.9121 18.5728)" class="st1 st2">
              ‘
            </text>
          </g>
          <g id="key-open-question">
            <path
              class="st0"
              d="M290.9,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C292.9,24.37,292,25.26,290.9,25.26z"
            />
            <text transform="matrix(1 0 0 1 281.5806 18.5729)" class="st1 st2">
              ¿
            </text>
          </g>
          <g id="key-backspace">
            <g>
              <path
                class="st0"
                d="M326.4,25.26h-28.13c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h28.13c1.1,0,2,0.9,2,2v14.19
				C328.4,24.37,327.51,25.26,326.4,25.26z"
              />
            </g>
            <g id="arrow">
              <line class="st4" x1="303.28" y1="16.17" x2="323.29" y2="16.17" />
              <polygon
                class="st4"
                points="301.39,16.12 303.28,14.96 303.28,17.37 			"
              />
            </g>
          </g>
          <g id="key-open-square-bracket">
            <path
              class="st0"
              d="M273.99,46.92H259.8c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C275.99,46.03,275.1,46.92,273.99,46.92z"
            />
            <text transform="matrix(1 0 0 1 265.5643 40.234)" class="st1 st2">
              ´
            </text>
          </g>
          <g id="key-close-square-bracket">
            <path
              class="st0"
              d="M295.8,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C297.8,46.03,296.9,46.92,295.8,46.92z"
            />
            <text transform="matrix(1 0 0 1 286.3676 40.234)" class="st1 st2">
              +
            </text>
          </g>
          <g id="key-rigth-shift">
            <path
              id="key_00000132808716403398615310000011044258880366672306_"
              class="st0"
              d="M326.4,90.25h-50.38c-1.1,0-2-0.9-2-2V74.06
			c0-1.1,0.9-2,2-2h50.38c1.1,0,2,0.9,2,2v14.19C328.4,89.35,327.51,90.25,326.4,90.25z"
            />
            <text transform="matrix(1 0 0 1 291.4538 82.3548)" class="st1 st3">
              SHIFT
            </text>
          </g>
          <path
            id="key-extra"
            class="st0"
            d="M326.4,111.91h-33.08c-1.1,0-2-0.9-2-2V95.72c0-1.1,0.9-2,2-2h33.08c1.1,0,2,0.9,2,2v14.19
		C328.4,111.01,327.51,111.91,326.4,111.91z"
          />
          <g id="key-alt-gr">
            <path
              class="st0"
              d="M258.95,111.91h-19.92c-1.1,0-2-0.9-2-2V95.72c0-1.1,0.9-2,2-2h19.92c1.1,0,2,0.9,2,2v14.19
			C260.95,111.01,260.05,111.91,258.95,111.91z"
            />
            <text
              transform="matrix(1.0077 0 0 1 241.7381 104.0161)"
              class="st1 st3"
            >
              ALT GR
            </text>
          </g>
          <g id="key-alt-gr_00000087403790323644720660000012114671307848197009_">
            <path
              class="st0"
              d="M285.95,111.91h-19.92c-1.1,0-2-0.9-2-2V95.72c0-1.1,0.9-2,2-2h19.92c1.1,0,2,0.9,2,2v14.19
			C287.95,111.01,287.05,111.91,285.95,111.91z"
            />
            <text
              transform="matrix(1.0077 0 0 1 268.7381 104.0161)"
              class="st1 st3"
            >
              CTRL
            </text>
          </g>
          <g id="key_x27_enter">
            <path
              class="st0"
              d="M326.4,28.74h-23.61c-1.1,0-2,0.9-2,2v14.19c0,1.1,0.9,2,2,2h0.9c1.1,0,2,0.9,2,2v17.66c0,1.1,0.9,2,2,2
			h18.72c1.1,0,2-0.9,2-2V44.92v-2.59v-11.6C328.4,29.63,327.51,28.74,326.4,28.74z"
            />
            <text
              transform="matrix(1.0077 0 0 1 307.9586 39.0314)"
              class="st1 st3"
            >
              ENTER
            </text>
          </g>
          <g id="key-close-curly-brace">
            <path
              class="st0"
              d="M299.99,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C301.99,67.69,301.1,68.59,299.99,68.59z"
            />
            <text
              transform="matrix(1 0 0 1 291.7884 61.8954)"
              class="st1 st2"
            >{`}`}</text>
          </g>
        </g>
        <g id="pinky-rigth-main">
          <g id="key-semicolon">
            <path
              class="st0"
              d="M256.96,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C258.96,67.69,258.07,68.59,256.96,68.59z"
            />
            <text transform="matrix(1 0 0 1 248.7583 61.8952)" class="st1 st2">
              ñ
            </text>
          </g>
          <g id="key-slash">
            <path
              class="st0"
              d="M268.9,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C270.9,89.35,270,90.25,268.9,90.25z"
            />
            <text transform="matrix(1 0 0 1 260.6905 83.5569)" class="st1 st2">
              -
            </text>
          </g>
          <g id="key-q">
            <path
              class="st0"
              d="M252.18,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C254.18,46.03,253.29,46.92,252.18,46.92z"
            />
            <text transform="matrix(1 0 0 1 242.8644 40.2339)" class="st1 st2">
              p
            </text>
          </g>
          <g id="key-0">
            <path
              class="st0"
              d="M247.78,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C249.78,24.37,248.88,25.26,247.78,25.26z"
            />
            <text transform="matrix(1 0 0 1 238.4591 18.5725)" class="st1 st2">
              0
            </text>
          </g>
          <g id="key-open-curly-brace">
            <path
              class="st0"
              d="M278.43,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C280.43,67.69,279.54,68.59,278.43,68.59z"
            />
            <text
              transform="matrix(1 0 0 1 270.4504 61.8953)"
              class="st1 st2"
            >{`{`}</text>
          </g>
        </g>
        <g id="ring-rigth-main">
          <g id="key-l">
            <path
              class="st0"
              d="M235.13,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C237.13,67.69,236.23,68.59,235.13,68.59z"
            />
            <text transform="matrix(1 0 0 1 227.1233 61.8952)" class="st1 st2">
              l
            </text>
          </g>
          <g id="key-dot">
            <path
              class="st0"
              d="M247.06,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C249.06,89.35,248.17,90.25,247.06,90.25z"
            />
            <text transform="matrix(1 0 0 1 238.8562 83.5569)" class="st1 st2">
              .
            </text>
          </g>
          <g id="key-o">
            <path
              class="st0"
              d="M230.35,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C232.35,46.03,231.45,46.92,230.35,46.92z"
            />
            <text transform="matrix(1 0 0 1 221.0299 40.2338)" class="st1 st2">
              o
            </text>
          </g>
          <g id="key-9">
            <path
              class="st0"
              d="M225.95,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C227.95,24.37,227.06,25.26,225.95,25.26z"
            />
            <text transform="matrix(1 0 0 1 216.6346 18.5725)" class="st1 st2">
              9
            </text>
          </g>
        </g>
        <g id="middle-rigth-main">
          <g id="key-k_00000178921847947953436570000007659270884230059424_">
            <path
              class="st0"
              d="M213.3,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C215.3,67.69,214.4,68.59,213.3,68.59z"
            />
            <text transform="matrix(1 0 0 1 204.2009 61.8952)" class="st1 st2">
              k
            </text>
          </g>
          <g id="key-comma">
            <path
              class="st0"
              d="M225.23,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C227.23,89.35,226.33,90.25,225.23,90.25z"
            />
            <text transform="matrix(1 0 0 1 217.0217 83.5569)" class="st1 st2">
              ,
            </text>
          </g>
          <g id="key-i">
            <path
              class="st0"
              d="M208.51,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C210.51,46.03,209.62,46.92,208.51,46.92z"
            />
            <text transform="matrix(1 0 0 1 200.5083 40.2339)" class="st1 st2">
              i
            </text>
          </g>
          <g id="key-8">
            <path
              class="st0"
              d="M204.13,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C206.13,24.37,205.23,25.26,204.13,25.26z"
            />
            <text transform="matrix(1 0 0 1 194.8106 18.5726)" class="st1 st2">
              8
            </text>
          </g>
        </g>
        <g id="index-rigth-main">
          <g id="key-j">
            <path
              class="st0"
              d="M191.46,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C193.46,67.69,192.57,68.59,191.46,68.59z"
            />
            <text transform="matrix(1 0 0 1 183.5952 61.8955)" class="st1 st2">
              j
            </text>
          </g>
          <g id="key-h">
            <path
              class="st0"
              d="M169.63,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C171.63,67.69,170.73,68.59,169.63,68.59z"
            />
            <text transform="matrix(1 0 0 1 160.3076 61.8952)" class="st1 st2">
              h
            </text>
          </g>
          <g id="key-m">
            <path
              class="st0"
              d="M203.39,90.25H189.2c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C205.39,89.35,204.5,90.25,203.39,90.25z"
            />
            <text transform="matrix(1 0 0 1 192.9668 83.5568)" class="st1 st2">
              m
            </text>
          </g>
          <g id="key-n">
            <path
              class="st0"
              d="M181.56,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C183.56,89.35,182.66,90.25,181.56,90.25z"
            />
            <text transform="matrix(1 0 0 1 172.2397 83.5564)" class="st1 st2">
              n
            </text>
          </g>
          <g id="key-u">
            <path
              class="st0"
              d="M186.68,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C188.68,46.03,187.79,46.92,186.68,46.92z"
            />
            <text transform="matrix(1 0 0 1 177.3613 40.2337)" class="st1 st2">
              u
            </text>
          </g>
          <g id="key-y">
            <path
              class="st0"
              d="M164.85,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C166.85,46.03,165.95,46.92,164.85,46.92z"
            />
            <text transform="matrix(1 0 0 1 155.7518 40.2336)" class="st1 st2">
              y
            </text>
          </g>
          <g id="key-7">
            <path
              class="st0"
              d="M182.31,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C184.31,24.37,183.41,25.26,182.31,25.26z"
            />
            <text transform="matrix(1 0 0 1 172.9866 18.5725)" class="st1 st2">
              7
            </text>
          </g>
          <g id="key-6">
            <path
              class="st0"
              d="M160.48,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C162.48,24.37,161.59,25.26,160.48,25.26z"
            />
            <text transform="matrix(1 0 0 1 151.1625 18.5728)" class="st1 st2">
              6
            </text>
          </g>
        </g>
        <g id="index-left-main">
          <g id="key-b">
            <path
              class="st0"
              d="M159.72,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C161.72,89.35,160.83,90.25,159.72,90.25z"
            />
            <text transform="matrix(1 0 0 1 150.4059 83.5569)" class="st1 st2">
              b
            </text>
          </g>
          <g id="key-g">
            <path
              class="st0"
              d="M147.79,68.59H133.6c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C149.79,67.69,148.9,68.59,147.79,68.59z"
            />
            <text transform="matrix(1 0 0 1 138.4737 61.8952)" class="st1 st2">
              g
            </text>
          </g>
          <g id="key-t">
            <path
              class="st0"
              d="M143.01,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C145.01,46.03,144.12,46.92,143.01,46.92z"
            />
            <text transform="matrix(1 0 0 1 134.8059 40.2339)" class="st1 st2">
              t
            </text>
          </g>
          <g id="key-5">
            <path
              class="st0"
              d="M138.66,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C140.66,24.37,139.76,25.26,138.66,25.26z"
            />
            <text transform="matrix(1 0 0 1 129.3385 18.5728)" class="st1 st2">
              5
            </text>
          </g>
          <g id="key-f">
            <path
              class="st0"
              d="M125.96,68.59h-14.19c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C127.96,67.69,127.06,68.59,125.96,68.59z"
            />
            <text transform="matrix(1 0 0 1 117.6722 61.8955)" class="st1 st2">
              f
            </text>
          </g>
          <g id="key-v">
            <path
              class="st0"
              d="M137.89,90.25H123.7c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C139.89,89.35,138.99,90.25,137.89,90.25z"
            />
            <text transform="matrix(1 0 0 1 128.7957 83.5568)" class="st1 st2">
              v
            </text>
          </g>
          <g id="key-r">
            <path
              class="st0"
              d="M121.18,46.92h-14.19c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C123.18,46.03,122.28,46.92,121.18,46.92z"
            />
            <text transform="matrix(1 0 0 1 112.7357 40.2337)" class="st1 st2">
              r
            </text>
          </g>
          <g id="key-4">
            <path
              class="st0"
              d="M116.83,25.26h-14.19c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C118.83,24.37,117.94,25.26,116.83,25.26z"
            />
            <text transform="matrix(1 0 0 1 107.514 18.5725)" class="st1 st2">
              4
            </text>
          </g>
        </g>
        <g id="pinky-left-main">
          <g id="key-a">
            <path
              class="st0"
              d="M60.46,68.59H46.27c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C62.46,67.69,61.56,68.59,60.46,68.59z"
            />
            <text transform="matrix(1 0 0 1 51.1364 61.8956)" class="st1 st2">
              a
            </text>
          </g>
          <g id="key-z">
            <path
              class="st0"
              d="M72.39,90.25H58.2c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C74.39,89.35,73.49,90.25,72.39,90.25z"
            />
            <text transform="matrix(1 0 0 1 63.2932 83.5566)" class="st1 st2">
              z
            </text>
          </g>
          <g id="key-q_00000015316415024694446780000009474778041056061330_">
            <path
              class="st0"
              d="M55.67,46.92H41.49c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C57.67,46.03,56.78,46.92,55.67,46.92z"
            />
            <text transform="matrix(1 0 0 1 46.3557 40.2339)" class="st1 st2">
              q
            </text>
          </g>
          <g id="key-1">
            <path
              class="st0"
              d="M51.36,25.26H37.17c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C53.36,24.37,52.47,25.26,51.36,25.26z"
            />
            <text transform="matrix(1 0 0 1 42.042 18.5727)" class="st1 st2">
              1
            </text>
          </g>
        </g>
        <g id="middle-left-main">
          <g id="key-d">
            <path
              class="st0"
              d="M104.12,68.59H89.94c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C106.12,67.69,105.23,68.59,104.12,68.59z"
            />
            <text transform="matrix(1 0 0 1 94.8048 61.8955)" class="st1 st2">
              d
            </text>
          </g>
          <g id="key-c">
            <path
              class="st0"
              d="M116.06,90.25h-14.19c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C118.06,89.35,117.16,90.25,116.06,90.25z"
            />
            <text transform="matrix(1 0 0 1 106.9616 83.5568)" class="st1 st2">
              c
            </text>
          </g>
          <g id="key-e">
            <path
              class="st0"
              d="M99.04,46.62H84.85c-1.1,0-2-0.9-2-2V30.43c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C101.04,45.73,100.14,46.62,99.04,46.62z"
            />
            <text transform="matrix(1 0 0 1 89.7213 39.9306)" class="st1 st2">
              e
            </text>
          </g>
          <g id="key-3">
            <path
              class="st0"
              d="M94.71,24.96H80.52c-1.1,0-2-0.9-2-2V8.77c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C96.71,24.06,95.81,24.96,94.71,24.96z"
            />
            <text transform="matrix(1 0 0 1 85.3869 18.2694)" class="st1 st2">
              3
            </text>
          </g>
        </g>
        <g id="ring-left-main">
          <g id="key-s">
            <path
              class="st0"
              d="M82.29,68.59H68.1c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C84.29,67.69,83.39,68.59,82.29,68.59z"
            />
            <text transform="matrix(1 0 0 1 73.1953 61.8954)" class="st1 st2">
              s
            </text>
          </g>
          <g id="key-w_00000084513255671744067080000012658611354284416665_">
            <path
              class="st0"
              d="M94.22,90.25H80.03c-1.1,0-2-0.9-2-2V74.06c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C96.22,89.35,95.33,90.25,94.22,90.25z"
            />
            <text transform="matrix(1 0 0 1 85.1275 83.5567)" class="st1 st2">
              x
            </text>
          </g>
          <g id="key-w">
            <path
              class="st0"
              d="M77.51,46.92H63.32c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C79.51,46.03,78.61,46.92,77.51,46.92z"
            />
            <text transform="matrix(1 0 0 1 67.526 40.2341)" class="st1 st2">
              w
            </text>
          </g>
          <g id="key-2">
            <path
              class="st0"
              d="M73.19,25.26H59c-1.1,0-2-0.9-2-2V9.07c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C75.19,24.37,74.29,25.26,73.19,25.26z"
            />
            <text transform="matrix(1 0 0 1 63.8659 18.5724)" class="st1 st2">
              2
            </text>
          </g>
        </g>
        <g id="keyboard-edge">
          <path
            id="key_00000150817331583710786270000012815097637014537118_"
            class="st0"
            d="M331.48,118.8H2.21c-1.1,0-2-0.9-2-2V2.18
		c0-1.1,0.9-2,2-2h329.27c1.1,0,2,0.9,2,2V116.8C333.48,117.91,332.58,118.8,331.48,118.8z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Keyboard;
