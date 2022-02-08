document.addEventListener("keydown", (e) => {
  const keyPressed = e.code;
  if (keyPressed === "Tab") {
    e.preventDefault();
  }

  const svgPressed = document.getElementById(`rect-${keyPressed}`);
  if (svgPressed) {
    console.log(svgPressed);
    svgPressed.classList.add("key-active");
  }
});

document.addEventListener("keyup", (e) => {
  const keyPressed = e.code;
  if (keyPressed === "Tab") {
    e.preventDefault();
  }

  const svgPressed = document.getElementById(`rect-${keyPressed}`);
  if (svgPressed) {
    svgPressed.classList.remove("key-active");
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
            .st0{fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
            .st1{font-family:'Open Sans';}
            .st2{font-size:6px;}
            .st3{font-size:8px;}
            .st4{stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
            .st5{font-size:4px;}
            .key-active{
              fill:red;
            }
          `}
        </style>
        <g id="key-backslash-space">
          <path
            class="st0"
            d="M260.77,112.22h-19.73c-1.1,0-2-0.9-2-2V96.03c0-1.1,0.9-2,2-2h19.73c1.1,0,2,0.9,2,2v14.19
		C262.77,111.32,261.88,112.22,260.77,112.22z"
          />
          <text transform="matrix(1 0 0 1 250.0754 104.9239)" class="st1 st2">
            \
          </text>
        </g>
        <g id="pinky-rigth">
          <g id="key-minus">
            <path
              class="st0"
              d="M271.24,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C273.24,24.67,272.35,25.57,271.24,25.57z"
            />
            <text transform="matrix(1 0 0 1 262.817 18.8789)" class="st1 st3">
              -
            </text>
          </g>
          <g id="key-equal">
            <path
              class="st0"
              d="M292.8,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C294.8,24.67,293.91,25.57,292.8,25.57z"
            />
            <text transform="matrix(1 0 0 1 283.3745 18.879)" class="st1 st3">
              =
            </text>
          </g>
          <g id="key-backspace">
            <g>
              <path
                class="st0"
                d="M328.88,25.27h-29.19c-0.84,0.3-1.51-0.59-1.51-1.7V9.38c0-1.1,0.68-2,1.51-2h29.19c0.84,0,1.51,0.9,1.51,2
				v14.19C330.39,24.67,329.71,25.57,328.88,25.27z"
              />
            </g>
            <g id="arrow">
              <line class="st4" x1="305.23" y1="16.35" x2="325.23" y2="16.35" />
              <polygon
                class="st4"
                points="303.33,16.31 305.23,15.15 305.23,17.56 			"
              />
            </g>
          </g>
          <g id="key-open-square-bracket">
            <path
              class="st0"
              d="M275.9,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C277.9,46.33,277,47.23,275.9,47.23z"
            />
            <text transform="matrix(1 0 0 1 267.6896 40.54)" class="st1 st3">
              [
            </text>
          </g>
          <g id="key-close-square-bracket">
            <path
              class="st0"
              d="M297.7,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C299.7,46.33,298.81,47.23,297.7,47.23z"
            />
            <text transform="matrix(1 0 0 1 289.497 40.54)" class="st1 st3">
              ]
            </text>
          </g>
          <g id="key-backslash">
            <path
              class="st0"
              d="M328.39,47.23h-23.07c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h23.07c1.1,0,2,0.9,2,2v14.19
			C330.39,46.33,329.5,47.23,328.39,47.23z"
            />
            <text transform="matrix(1 0 0 1 315.745 40.5402)" class="st1 st3">
              \
            </text>
          </g>
          <g id="key-rshift">
            <path
              id="key_00000132808716403398615310000011044258880366672306_"
              class="st0"
              d="M328.39,90.55h-50.46c-1.1,0-2-0.9-2-2V74.36
			c0-1.1,0.9-2,2-2h50.46c1.1,0,2,0.9,2,2v14.19C330.39,89.66,329.5,90.55,328.39,90.55z"
            />
            <text transform="matrix(1 0 0 1 297.3831 82.6609)" class="st1 st5">
              SHIFT
            </text>
          </g>
          <g id="key-rigth-control">
            <path
              id="key_00000001661918784174663950000004527555173464787111_"
              class="st0"
              d="M328.39,112.22h-33.98c-1.1,0-2-0.9-2-2V96.03
			c0-1.1,0.9-2,2-2h33.98c1.1,0,2,0.9,2,2v14.19C330.39,111.32,329.5,112.22,328.39,112.22z"
            />
            <text transform="matrix(1 0 0 1 306.1807 104.3229)" class="st1 st5">
              CTRL
            </text>
          </g>
          <g id="key-alt-gr">
            <path
              class="st0"
              d="M287.76,112.21h-19.73c-1.1,0-2-0.9-2-2V96.03c0-1.1,0.9-2,2-2h19.73c1.1,0,2,0.9,2,2v14.19
			C289.76,111.32,288.87,112.21,287.76,112.21z"
            />
            <text transform="matrix(1 0 0 1 270.6985 104.3221)" class="st1 st5">
              ALT GR
            </text>
          </g>
          <g id="key-enter">
            <text transform="matrix(1 0 0 1 301.2729 60.9991)" class="st1 st5">
              ENTER
            </text>
            <path
              id="key_00000090282212923189329040000005305423110019923104_"
              class="st0"
              d="M328.39,68.89h-40.68c-1.1,0-2-0.9-2-2V52.7
			c0-1.1,0.9-2,2-2h40.68c1.1,0,2,0.9,2,2v14.19C330.39,68,329.5,68.89,328.39,68.89z"
            />
          </g>
        </g>
        <g id="pinky-rigth-main">
          <g id="key-semicolon">
            <path
              class="st0"
              d="M258.87,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C260.87,68,259.97,68.89,258.87,68.89z"
            />
            <text transform="matrix(1 0 0 1 250.6632 62.2014)" class="st1 st3">
              ;
            </text>
          </g>
          <g id="key-slash">
            <path
              class="st0"
              d="M270.8,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C272.8,89.66,271.91,90.55,270.8,90.55z"
            />
            <text transform="matrix(1 0 0 1 262.5953 83.8631)" class="st1 st3">
              /
            </text>
          </g>
          <g id="key-q">
            <path
              class="st0"
              d="M254.09,47.23H239.9c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C256.09,46.33,255.19,47.23,254.09,47.23z"
            />
            <text transform="matrix(1 0 0 1 244.7692 40.54)" class="st1 st3">
              p
            </text>
          </g>
          <g id="key-0">
            <path
              class="st0"
              d="M249.68,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C251.68,24.67,250.79,25.57,249.68,25.57z"
            />
            <text transform="matrix(1 0 0 1 240.364 18.8786)" class="st1 st3">
              0
            </text>
          </g>
          <g id="key-single-quote">
            <path
              class="st0"
              d="M280.34,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C282.34,68,281.44,68.89,280.34,68.89z"
            />
            <text transform="matrix(1 0 0 1 272.3552 62.2014)" class="st1 st3">
              ‘
            </text>
          </g>
        </g>
        <g id="ring-rigth-main">
          <g id="key-l">
            <path
              class="st0"
              d="M237.03,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C239.03,68,238.14,68.89,237.03,68.89z"
            />
            <text transform="matrix(1 0 0 1 229.0281 62.2014)" class="st1 st3">
              l
            </text>
          </g>
          <g id="key-dot">
            <path
              class="st0"
              d="M248.97,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C250.97,89.66,250.07,90.55,248.97,90.55z"
            />
            <text transform="matrix(1 0 0 1 240.7611 83.8631)" class="st1 st3">
              .
            </text>
          </g>
          <g id="key-o">
            <path
              class="st0"
              d="M232.25,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C234.25,46.33,233.36,47.23,232.25,47.23z"
            />
            <text transform="matrix(1 0 0 1 222.9348 40.54)" class="st1 st3">
              o
            </text>
          </g>
          <g id="key-9">
            <path
              class="st0"
              d="M227.86,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C229.86,24.67,228.96,25.57,227.86,25.57z"
            />
            <text transform="matrix(1 0 0 1 218.5395 18.8786)" class="st1 st3">
              9
            </text>
          </g>
        </g>
        <g id="middle-rigth-main">
          <g id="key-k_00000178921847947953436570000007659270884230059424_">
            <path
              class="st0"
              d="M215.2,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C217.2,68,216.3,68.89,215.2,68.89z"
            />
            <text transform="matrix(1 0 0 1 206.1058 62.2014)" class="st1 st3">
              k
            </text>
          </g>
          <g id="key-comma">
            <path
              class="st0"
              d="M227.13,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C229.13,89.66,228.24,90.55,227.13,90.55z"
            />
            <text transform="matrix(1 0 0 1 218.9266 83.8631)" class="st1 st3">
              ,
            </text>
          </g>
          <g id="key-i">
            <path
              class="st0"
              d="M210.42,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C212.42,46.33,211.52,47.23,210.42,47.23z"
            />
            <text transform="matrix(1 0 0 1 202.4132 40.54)" class="st1 st3">
              i
            </text>
          </g>
          <g id="key-8">
            <path
              class="st0"
              d="M206.03,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C208.03,24.67,207.14,25.57,206.03,25.57z"
            />
            <text transform="matrix(1 0 0 1 196.7155 18.8788)" class="st1 st3">
              8
            </text>
          </g>
        </g>
        <g id="index-rigth-main">
          <g id="key-j">
            <path
              class="st0"
              d="M193.37,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C195.37,68,194.47,68.89,193.37,68.89z"
            />
            <text transform="matrix(1 0 0 1 185.5001 62.2017)" class="st1 st3">
              j
            </text>
          </g>
          <g id="key-h">
            <path
              class="st0"
              d="M171.53,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C173.53,68,172.64,68.89,171.53,68.89z"
            />
            <text transform="matrix(1 0 0 1 162.2124 62.2013)" class="st1 st3">
              h
            </text>
          </g>
          <g id="key-m">
            <path
              class="st0"
              d="M205.3,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C207.3,89.66,206.4,90.55,205.3,90.55z"
            />
            <text transform="matrix(1 0 0 1 194.8717 83.8629)" class="st1 st3">
              m
            </text>
          </g>
          <g id="key-n">
            <path
              class="st0"
              d="M183.46,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C185.46,89.66,184.57,90.55,183.46,90.55z"
            />
            <text transform="matrix(1 0 0 1 174.1446 83.8626)" class="st1 st3">
              n
            </text>
          </g>
          <g id="key-u">
            <path
              class="st0"
              d="M188.59,47.23H174.4c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C190.59,46.33,189.69,47.23,188.59,47.23z"
            />
            <text transform="matrix(1 0 0 1 179.2662 40.5399)" class="st1 st3">
              u
            </text>
          </g>
          <g id="key-y">
            <path
              class="st0"
              d="M166.75,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C168.75,46.33,167.86,47.23,166.75,47.23z"
            />
            <text transform="matrix(1 0 0 1 157.6567 40.5398)" class="st1 st3">
              y
            </text>
          </g>
          <g id="key-7">
            <path
              class="st0"
              d="M184.21,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C186.21,24.67,185.32,25.57,184.21,25.57z"
            />
            <text transform="matrix(1 0 0 1 174.8914 18.8786)" class="st1 st3">
              7
            </text>
          </g>
          <g id="key-6">
            <path
              class="st0"
              d="M162.39,25.57H148.2c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C164.39,24.67,163.49,25.57,162.39,25.57z"
            />
            <text transform="matrix(1 0 0 1 153.0674 18.8789)" class="st1 st3">
              6
            </text>
          </g>
        </g>
        <g id="index-left-main">
          <g id="key-b">
            <path
              class="st0"
              d="M161.63,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C163.63,89.66,162.73,90.55,161.63,90.55z"
            />
            <text transform="matrix(1 0 0 1 152.3107 83.8631)" class="st1 st3">
              b
            </text>
          </g>
          <g id="key-g">
            <path
              class="st0"
              d="M149.7,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C151.7,68,150.8,68.89,149.7,68.89z"
            />
            <text transform="matrix(1 0 0 1 140.3786 62.2014)" class="st1 st3">
              g
            </text>
          </g>
          <g id="key-t">
            <path
              class="st0"
              d="M144.92,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C146.92,46.33,146.02,47.23,144.92,47.23z"
            />
            <text transform="matrix(1 0 0 1 136.7108 40.54)" class="st1 st3">
              t
            </text>
          </g>
          <g id="key-5">
            <path
              class="st0"
              d="M140.56,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C142.56,24.67,141.67,25.57,140.56,25.57z"
            />
            <text transform="matrix(1 0 0 1 131.2434 18.8789)" class="st1 st3">
              5
            </text>
          </g>
          <g id="key-f">
            <path
              class="st0"
              d="M127.86,68.89h-14.19c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C129.86,68,128.97,68.89,127.86,68.89z"
            />
            <text transform="matrix(1 0 0 1 119.5771 62.2017)" class="st1 st3">
              f
            </text>
          </g>
          <g id="key-v">
            <path
              class="st0"
              d="M139.8,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C141.8,89.66,140.9,90.55,139.8,90.55z"
            />
            <text transform="matrix(1 0 0 1 130.7006 83.8629)" class="st1 st3">
              v
            </text>
          </g>
          <g id="key-r">
            <path
              class="st0"
              d="M123.08,47.23h-14.19c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C125.08,46.33,124.19,47.23,123.08,47.23z"
            />
            <text transform="matrix(1 0 0 1 114.6405 40.5399)" class="st1 st3">
              r
            </text>
          </g>
          <g id="key-4">
            <path
              class="st0"
              d="M118.74,25.57h-14.19c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C120.74,24.67,119.84,25.57,118.74,25.57z"
            />
            <text transform="matrix(1 0 0 1 109.4189 18.8786)" class="st1 st3">
              4
            </text>
          </g>
        </g>
        <g id="middle-left-main">
          <g id="key-d">
            <path
              class="st0"
              d="M106.03,68.89H91.84c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C108.03,68,107.13,68.89,106.03,68.89z"
            />
            <text transform="matrix(1 0 0 1 96.7097 62.2017)" class="st1 st3">
              d
            </text>
          </g>
          <g id="key-c">
            <path
              class="st0"
              d="M117.96,90.55h-14.19c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C119.96,89.66,119.07,90.55,117.96,90.55z"
            />
            <text transform="matrix(1 0 0 1 108.8665 83.8629)" class="st1 st3">
              c
            </text>
          </g>
          <g id="key-e">
            <path
              class="st0"
              d="M100.95,46.93H86.76c-1.1,0-2-0.9-2-2V30.74c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C102.95,46.03,102.05,46.93,100.95,46.93z"
            />
            <text transform="matrix(1 0 0 1 91.6262 40.2368)" class="st1 st3">
              e
            </text>
          </g>
          <g id="key-3">
            <path
              class="st0"
              d="M96.61,25.27H82.42c-1.1,0-2-0.9-2-2V9.08c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C98.61,24.37,97.72,25.27,96.61,25.27z"
            />
            <text transform="matrix(1 0 0 1 87.2918 18.5756)" class="st1 st3">
              3
            </text>
          </g>
        </g>
        <g id="ring-left-main">
          <g id="key-s">
            <path
              class="st0"
              d="M84.19,68.89H70.01c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C86.19,68,85.3,68.89,84.19,68.89z"
            />
            <text transform="matrix(1 0 0 1 75.1002 62.2016)" class="st1 st3">
              s
            </text>
          </g>
          <g id="key-w_00000084513255671744067080000012658611354284416665_">
            <path
              class="st0"
              d="M96.13,90.55H81.94c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C98.13,89.66,97.23,90.55,96.13,90.55z"
            />
            <text transform="matrix(1 0 0 1 87.0324 83.8628)" class="st1 st3">
              x
            </text>
          </g>
          <g id="key-w">
            <path
              class="st0"
              d="M79.41,47.23H65.22c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C81.41,46.33,80.52,47.23,79.41,47.23z"
            />
            <text transform="matrix(1 0 0 1 69.4309 40.5403)" class="st1 st3">
              w
            </text>
          </g>
          <g id="key-2">
            <path
              class="st0"
              d="M75.09,25.57H60.9c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C77.09,24.67,76.19,25.57,75.09,25.57z"
            />
            <text transform="matrix(1 0 0 1 65.7708 18.8786)" class="st1 st3">
              2
            </text>
          </g>
        </g>
        <g id="pinky-left-main">
          <g id="key-a">
            <path
              id="rect-KeyA"
              class="st0"
              d="M62.36,68.89H48.17c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C64.36,68,63.46,68.89,62.36,68.89z"
            />
            <text
              id="text-KeyA"
              transform="matrix(1 0 0 1 53.0413 62.2017)"
              class="st1 st3"
            >
              a
            </text>
          </g>
          <g id="key-z">
            <path
              id="rect-KeyZ"
              class="st0"
              d="M74.29,90.55H60.1c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C76.29,89.66,75.4,90.55,74.29,90.55z"
            />
            <text
              id="text-KeyZ"
              transform="matrix(1 0 0 1 65.198 83.8627)"
              class="st1 st3"
            >
              z
            </text>
          </g>
          <g id="key-q_00000015316415024694446780000009474778041056061330_">
            <path
              id="rect-KeyQ"
              class="st0"
              d="M57.58,47.23H43.39c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C59.58,46.33,58.68,47.23,57.58,47.23z"
            />
            <text
              id="text-KeyQ"
              transform="matrix(1 0 0 1 48.2606 40.5401)"
              class="st1 st3"
            >
              q
            </text>
          </g>
          <g id="key-1">
            <path
              id="rect-Digit1"
              class="st0"
              d="M53.27,25.57H39.08c-1.1,0-2-0.9-2-2V9.38c0-1.1,0.9-2,2-2h14.19c1.1,0,2,0.9,2,2v14.19
			C55.27,24.67,54.37,25.57,53.27,25.57z"
            />
            <text
              id="text-Digit1"
              transform="matrix(1 0 0 1 43.9469 18.8789)"
              class="st1 st3"
            >
              1
            </text>
          </g>
        </g>
        <g id="pinky-left">
          <g id="key-Backquote">
            <path
              id="rect-Backquote"
              class="st0"
              d="M31.7,25.54H8.07c-1.1,0-2-0.9-2-2V9.35c0-1.1,0.9-2,2-2H31.7c1.1,0,2,0.9,2,2v14.19
			C33.7,24.64,32.81,25.54,31.7,25.54z"
            />
            <text
              id="text-Backquote"
              transform="matrix(1 0 0 1 18.5558 18.8464)"
              class="st1 st3"
            >
              `
            </text>
          </g>
          <g id="key-tab">
            <path
              id="rect-Tab"
              class="st0"
              d="M36.24,47.23H8.07c-1.1,0-2-0.9-2-2V31.04c0-1.1,0.9-2,2-2h28.17c1.1,0,2,0.9,2,2v14.19
			C38.24,46.33,37.35,47.23,36.24,47.23z"
            />
            <text
              id="text-Tab"
              transform="matrix(1 0 0 1 13.1428 39.3377)"
              class="st1 st5"
            >
              TAB
            </text>
          </g>
          <g id="key-caps-lock">
            <path
              id="rect-CapsLock"
              class="st0"
              d="M41.06,68.89H8.07c-1.1,0-2-0.9-2-2V52.7c0-1.1,0.9-2,2-2h32.99c1.1,0,2,0.9,2,2v14.19
			C43.06,68,42.17,68.89,41.06,68.89z"
            />
            <text
              id="text-CapsLock"
              transform="matrix(1 0 0 1 13.1429 60.9994)"
              class="st1 st5"
            >
              CAPS LOCK
            </text>
          </g>
          <g id="key-lshift">
            <path
              id="rect-ShiftLeft"
              class="st0"
              d="M53.27,90.55H8.07c-1.1,0-2-0.9-2-2V74.36c0-1.1,0.9-2,2-2h45.2c1.1,0,2,0.9,2,2v14.19
			C55.27,89.66,54.37,90.55,53.27,90.55z"
            />
            <text
              id="text-ShiftLeft"
              transform="matrix(1 0 0 1 13.1432 82.6609)"
              class="st1 st5"
            >
              SHIFT
            </text>
          </g>
          <g id="key-left-control">
            <path
              id="rect-ControlLeft"
              class="st0"
              d="M53.27,112.21H8.07c-1.1,0-2-0.9-2-2V96.03c0-1.1,0.9-2,2-2h45.2c1.1,0,2,0.9,2,2
			v14.19C55.27,111.32,54.37,112.21,53.27,112.21z"
            />
            <text
              id="text-ControlLeft"
              transform="matrix(1 0 0 1 13.1429 104.322)"
              class="st1 st5"
            >
              CTRL
            </text>
          </g>
          <g id="key-alt">
            <path
              id="rect-AltLeft"
              class="st0"
              d="M80.01,112.21H60.28c-1.1,0-2-0.9-2-2V96.03c0-1.1,0.9-2,2-2h19.73c1.1,0,2,0.9,2,2v14.19
			C82.01,111.32,81.12,112.21,80.01,112.21z"
            />
            <text
              id="text-AltLeft"
              transform="matrix(1 0 0 1 66.483 104.322)"
              class="st1 st5"
            >
              ALT
            </text>
          </g>
        </g>
        <path
          id="key-space"
          class="st0"
          d="M233.54,112.22H86.61c-1.1,0-2-0.9-2-2V96.03c0-1.1,0.9-2,2-2h146.93c1.1,0,2,0.9,2,2v14.19
	C235.54,111.32,234.64,112.22,233.54,112.22z"
        />
        <g id="keyboard-edge">
          <g id="key-space_00000153701723922808376610000013192163799558657950_">
            <path
              id="key_00000100360499278098516810000005832297643611377833_"
              class="st0"
              d="M334.04,117.48H3.46c-1.1,0-2-0.9-2-2V4.11
			c0-1.1,0.9-2,2-2h330.58c1.1,0,2,0.9,2,2v111.37C336.04,116.59,335.15,117.48,334.04,117.48z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Keyboard;
