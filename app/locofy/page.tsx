import type { NextPage } from 'next'
import styles from './index.module.css'

const Page: NextPage = () => {
  return (
    <div className={styles.templategui01bim}>
      <div className={styles.dkv}>
        <img className={styles.bimIcon} alt="" src="BIM.png" />
        <div className={styles.dkvChild} />
        <div className={styles.dkvItem} />
        <div className={styles.dkvInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.dkvChild1} />
        <div className={styles.dkvChild2} />
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>情報の概要</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.subtract3}>
          <div className={styles.subtractChild} />
          <div className={styles.subtractItem} />
        </div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.gis}>データ解析</div>
        <div className={styles.dayDataAnalysis}>
          <span className={styles.day}>
            <span>[DAY]</span>
          </span>
          <span className={styles.dataAnalysis}>
            <span className={styles.day}>{` `}</span>
            <span>{`Data-Analysis  `}</span>
          </span>
        </div>
      </div>
      <div className={styles.gisParent}>
        <div className={styles.gis}>GIS データ分析</div>
        <div className={styles.gisDataAnalysisCapabilitieContainer}>
          <span>
            <span className={styles.day}>[GIS]</span>
          </span>
          <span className={styles.dataAnalysis}>
            <span>{` `}</span>
            <span>Data-Analysis Capabilities</span>
          </span>
        </div>
      </div>
      <div className={styles.parent1}>
        <div className={styles.div}>データ統計</div>
        <b className={styles.dWContainer}>
          <span>D</span>
          <span className={styles.w}>{` `}</span>
          <span>/</span>
          <span className={styles.w}> W</span>
          <span> / M</span>
        </b>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.subtract3}>
          <div className={styles.subtractChild} />
          <div className={styles.subtractItem} />
        </div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.parent2}>
        <div className={styles.div}>情報リスト</div>
        <div className={styles.div4}>合計：</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.subtract3}>
          <div className={styles.subtractChild} />
          <div className={styles.subtractItem} />
        </div>
        <div className={styles.frameChild1} />
        <img className={styles.icon15} alt="" src="112,000.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild10} alt="" src="Group 7.svg" />
          <div className={styles.groupDiv}>
            <div className={styles.div5}>%</div>
            <div className={styles.alert}>ALERT</div>
            <img className={styles.icon16} alt="" src="80.svg" />
            <div className={styles.div6}>人口負荷率</div>
            <div className={styles.high}>HIGH</div>
            <div className={styles.union}>
              <div className={styles.unionChild} />
              <div className={styles.unionItem} />
            </div>
          </div>
        </div>
        <img className={styles.frameChild11} alt="" src="Group 10.svg" />
        <img className={styles.frameChild12} alt="" src="Group 22.svg" />
        <img className={styles.frameChild13} alt="" src="Group 23.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.parent3}>
            <div className={styles.div7}>人口が増える</div>
            <div className={styles.div8}>
              <span>250/</span>
              <span className={styles.span2}>2000</span>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.parent3}>
            <div className={styles.div7}>人口が増える</div>
            <div className={styles.div8}>
              <span>400/</span>
              <span className={styles.span2}>2000</span>
            </div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.groupParent2}>
            <div className={styles.parent5}>
              <img className={styles.icon17} alt="" src="37,000.svg" />
              <div className={styles.div11}>予測データ</div>
              <div className={styles.forecastData}>Forecast Data</div>
              <div className={styles.groupInner} />
              <div className={styles.groupChild1} />
            </div>
            <div className={styles.parent6}>
              <img className={styles.icon18} alt="" src="22,000.svg" />
              <div className={styles.div12}>実際データ</div>
              <div className={styles.actualData}>Actual Data</div>
              <div className={styles.groupChild2} />
              <div className={styles.groupChild3} />
            </div>
          </div>
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
        </div>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild7} />
          <div className={styles.div13}>人口の流れ</div>
          <img className={styles.subtractIcon} alt="" src="Subtract.svg" />
          <img className={styles.frameIcon6} alt="" src="Frame.svg" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild7} />
          <div className={styles.div13}>成長率分析</div>
          <img className={styles.subtractIcon} alt="" src="Subtract.svg" />
          <img className={styles.frameIcon7} alt="" src="Frame.svg" />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild7} />
          <div className={styles.div13}>流れの分析</div>
          <img className={styles.subtractIcon2} alt="" src="Subtract.svg" />
          <img className={styles.frameIcon7} alt="" src="Frame.svg" />
        </div>
        <div className={styles.lineParent}>
          <img className={styles.lineIcon1} alt="" src="line.svg" />
          <img className={styles.groupChild10} alt="" src="Group 29.svg" />
          <img className={styles.groupChild11} alt="" src="Group 30.svg" />
          <div className={styles.parent7}>
            <div className={styles.div16}>20,000</div>
            <div className={styles.div17}>25,000</div>
            <div className={styles.div18}>30,000</div>
            <div className={styles.div19}>35,000</div>
            <div className={styles.div20}>40,000</div>
            <div className={styles.div21}>45,000</div>
            <div className={styles.w1}>単位:W</div>
          </div>
          <img className={styles.groupChild12} alt="" src="Group 40.svg" />
          <div className={styles.groupParent4}>
            <div className={styles.groupParent5}>
              <div className={styles.wrapper}>
                <div className={styles.div22}>09%</div>
              </div>
              <div className={styles.div23}>月曜日</div>
            </div>
            <div className={styles.groupParent6}>
              <div className={styles.wrapper}>
                <div className={styles.div22}>08%</div>
              </div>
              <div className={styles.div23}>火曜日</div>
            </div>
            <div className={styles.groupParent7}>
              <div className={styles.wrapper2}>
                <div className={styles.div22}>07%</div>
              </div>
              <div className={styles.div23}>水曜日</div>
            </div>
            <div className={styles.groupParent8}>
              <div className={styles.wrapper}>
                <div className={styles.div22}>06%</div>
              </div>
              <div className={styles.div23}>木曜日</div>
            </div>
            <div className={styles.groupParent9}>
              <div className={styles.wrapper}>
                <div className={styles.div22}>05%</div>
              </div>
              <div className={styles.div23}>金曜日</div>
            </div>
            <div className={styles.groupParent10}>
              <div className={styles.wrapper}>
                <div className={styles.div22}>04%</div>
              </div>
              <div className={styles.div23}>土曜日</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.templategui01bimChild} />
      <div className={styles.table}>
        <div className={styles.groupParent11}>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild13} />
            <div className={styles.div34}>コミュニティ</div>
            <div className={styles.div35}>常住する</div>
            <div className={styles.div36}>外来人口</div>
            <div className={styles.groupChild14} />
            <div className={styles.div37}>態勢</div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <div className={styles.parent8}>
              <div className={styles.div22}>プランクト</div>
              <div className={styles.div39}>24,000</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div41}>18:00 住み込み勤務</div>
            </div>
          </div>
          <div className={styles.rectangleParent5}>
            <div className={styles.groupChild17} />
            <div className={styles.groupChild18} />
            <div className={styles.parent8}>
              <div className={styles.div22}>浜本ビル</div>
              <div className={styles.div39}>2,000</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div41}>18:00 住み込み勤務</div>
            </div>
          </div>
          <div className={styles.rectangleParent6}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <div className={styles.parent8}>
              <div className={styles.div22}>井上ビル</div>
              <div className={styles.div39}>3,400</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div41}>18:00 住み込み勤務</div>
            </div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.groupChild21} />
            <div className={styles.groupChild22} />
            <div className={styles.parent8}>
              <div className={styles.div22}>小笠原ビル</div>
              <div className={styles.div39}>25,000</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div53}>18:00 住み込み勤務</div>
            </div>
          </div>
          <div className={styles.rectangleParent8}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <div className={styles.parent8}>
              <div className={styles.div22}>中富ビル</div>
              <div className={styles.div39}>2,000</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div41}>18:00 住み込み勤務</div>
            </div>
          </div>
          <div className={styles.rectangleParent9}>
            <div className={styles.groupChild25} />
            <div className={styles.groupChild26} />
            <div className={styles.parent8}>
              <div className={styles.div22}>美竹ビル</div>
              <div className={styles.div39}>3,200</div>
              <div className={styles.div40}>3,000</div>
              <div className={styles.div41}>18:00 住み込み勤務</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild27} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild28} />
          <div className={styles.groupChild29} />
          <div className={styles.groupChild30} />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent11}>
              <div className={styles.groupChild31} />
              <img className={styles.frameIcon9} alt="" src="Frame.svg" />
              <div className={styles.div62}>完成した</div>
              <img className={styles.icon19} alt="" src="6,000.svg" />
              <img className={styles.groupChild32} alt="" src="Polygon 4.svg" />
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.rectangleParent12}>
              <div className={styles.groupChild31} />
              <img className={styles.frameIcon9} alt="" src="Frame.svg" />
              <div className={styles.div62}>元に戻す</div>
              <img className={styles.icon20} alt="" src="2,200.svg" />
              <img className={styles.groupChild32} alt="" src="Polygon 4.svg" />
            </div>
          </div>
          <div className={styles.groupWrapper1}>
            <div className={styles.rectangleParent13}>
              <div className={styles.groupChild31} />
              <img className={styles.frameIcon11} alt="" src="Frame.svg" />
              <div className={styles.div62}>完成予定</div>
              <img className={styles.icon21} alt="" src="3,000.svg" />
              <img className={styles.groupChild36} alt="" src="Polygon 4.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.parent14}>
        <div className={styles.div}>デバイス情報</div>
        <div className={styles.div66}>総動作電力：</div>
        <div className={styles.kw}>KW</div>
        <img className={styles.icon22} alt="" src="4,000.svg" />
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.subtract3}>
          <div className={styles.subtractChild4} />
          <div className={styles.subtractItem} />
        </div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.groupParent12}>
        <div className={styles.xT90Parent}>
          <div className={styles.xT90}>
            <span>実行パラメータかんばん</span>
            <span className={styles.span2}>[X-T90]</span>
          </div>
          <div className={styles.groupParent13}>
            <div className={styles.parameterAParent}>
              <div className={styles.parameterA}>Parameter-A</div>
              <img className={styles.icon23} alt="" src="600.svg" />
            </div>
            <div className={styles.parameterBParent}>
              <div className={styles.parameterA}>Parameter-B</div>
              <img className={styles.icon24} alt="" src="400.svg" />
            </div>
            <div className={styles.rectangleParent14}>
              <div className={styles.groupChild37} />
              <div className={styles.groupChild38} />
            </div>
            <div className={styles.groupParent14}>
              <div className={styles.percentageAParent}>
                <div className={styles.percentageA}>Percentage-A</div>
                <div className={styles.div67}>%</div>
                <img className={styles.icon25} alt="" src="05.svg" />
              </div>
              <img className={styles.groupChild39} alt="" src="Group 67.svg" />
            </div>
            <div className={styles.groupParent15}>
              <div className={styles.percentageAParent}>
                <div className={styles.percentageA}>Percentage-A</div>
                <div className={styles.div67}>%</div>
                <img className={styles.icon25} alt="" src="00.svg" />
              </div>
              <img className={styles.groupChild39} alt="" src="Group 67.svg" />
            </div>
          </div>
        </div>
        <div className={styles.groupParent16}>
          <div className={styles.groupParent17}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.groupChild41} />
              <div className={styles.groupChild42} />
              <img className={styles.icon27} alt="" src="200.svg" />
              <div className={styles.wd}>w/d</div>
            </div>
            <div className={styles.day1}>動作電力(DAY)</div>
          </div>
          <div className={styles.groupWrapper2}>
            <div className={styles.groupParent17}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.groupChild44} />
                <div className={styles.groupChild41} />
                <div className={styles.div69}>15%</div>
                <img className={styles.groupChild46} alt="" src="Line 13.svg" />
              </div>
              <div className={styles.day1}>動作負荷(DAY)</div>
            </div>
          </div>
          <div className={styles.parent15}>
            <div className={styles.div70}>
              <span>基準日：</span>
              <span className={styles.w}>2020/02/02 17:00:00</span>
            </div>
            <div className={styles.groupChild47} />
          </div>
        </div>
      </div>
      <div className={styles.div71}>70%</div>
      <div className={styles.titleParent}>
        <div className={styles.title}>
          <div className={styles.line6}>
            <div className={styles.lineChild} />
            <div className={styles.lineItem} />
            <div className={styles.lineInner} />
          </div>
          <div className={styles.parent16}>
            <div className={styles.div72}>運用データの監視</div>
            <div className={styles.subtractParent}>
              <div className={styles.subtract3}>
                <div className={styles.subtractChild6} />
                <div className={styles.subtractChild7} />
              </div>
              <div className={styles.frameChild18} />
            </div>
            <div className={styles.cpuParent}>
              <div className={styles.cpu}>CPU監視</div>
              <div className={styles.groupChild48} />
            </div>
            <div className={styles.coeParent}>
              <div className={styles.cpu}>COE監視</div>
              <div className={styles.groupChild49} />
            </div>
            <div className={styles.gpuParent}>
              <div className={styles.cpu}>GPU監視</div>
              <div className={styles.groupChild50} />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.groupParent19}>
            <div className={styles.groupParent20}>
              <div className={styles.rectangleParent15}>
                <div className={styles.groupChild51} />
                <div className={styles.groupChild52} />
                <div className={styles.groupChild53} />
                <div className={styles.groupChild54} />
                <div className={styles.groupChild55} />
              </div>
              <div className={styles.coe1}>COE</div>
            </div>
            <div className={styles.groupParent21}>
              <div className={styles.rectangleParent15}>
                <div className={styles.groupChild51} />
                <div className={styles.groupChild57} />
                <div className={styles.groupChild58} />
                <div className={styles.groupChild59} />
                <div className={styles.groupChild60} />
                <div className={styles.groupChild61} />
                <div className={styles.groupChild62} />
              </div>
              <div className={styles.coe1}>CPU</div>
            </div>
            <div className={styles.groupParent22}>
              <div className={styles.rectangleParent15}>
                <div className={styles.groupChild51} />
                <div className={styles.groupChild64} />
                <div className={styles.groupChild65} />
                <div className={styles.groupChild66} />
                <div className={styles.groupChild67} />
                <div className={styles.groupChild68} />
                <div className={styles.groupChild69} />
                <div className={styles.groupChild70} />
              </div>
              <div className={styles.coe1}>GPU</div>
            </div>
          </div>
          <div className={styles.lineGroup}>
            <img className={styles.lineIcon2} alt="" src="line.svg" />
            <img className={styles.waveIcon} alt="" src="wave.svg" />
            <div className={styles.parent17}>
              <div className={styles.div22}>01:00</div>
              <div className={styles.div74}>02:00</div>
              <div className={styles.div39}>03:00</div>
              <div className={styles.div76}>04:00</div>
              <div className={styles.div77}>05:00</div>
              <div className={styles.div78}>06:00</div>
              <div className={styles.div79}>07:00</div>
              <div className={styles.div80}>08:00</div>
              <div className={styles.div81}>09:00</div>
              <div className={styles.div82}>10:00</div>
            </div>
            <div className={styles.parent18}>
              <div className={styles.div83}>1000</div>
              <div className={styles.div84}>1500</div>
              <div className={styles.div85}>2000</div>
              <div className={styles.div86}>2500</div>
              <div className={styles.div22}>3000</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.templategui01bimItem} />
      <div className={styles.groupParent23}>
        <div className={styles.groupParent24}>
          <div className={styles.rectangleParent18}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild73} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>01</b>
                </div>
                <img className={styles.icon28} alt="" src="950.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent21}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild77} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>02</b>
                </div>
                <img className={styles.icon28} alt="" src="900.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent24}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild81} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>03</b>
                </div>
                <img className={styles.icon30} alt="" src="875.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent27}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild85} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>04</b>
                </div>
                <img className={styles.icon28} alt="" src="850.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent30}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild89} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>05</b>
                </div>
                <img className={styles.icon28} alt="" src="800.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent33}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild93} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>06</b>
                </div>
                <img className={styles.icon28} alt="" src="950.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent36}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild97} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>07</b>
                </div>
                <img className={styles.icon34} alt="" src="775.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent39}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild101} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>08</b>
                </div>
                <img className={styles.icon35} alt="" src="750.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent42}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild105} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>09</b>
                </div>
                <img className={styles.icon35} alt="" src="700.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent45}>
            <div className={styles.groupChild71} />
            <div className={styles.groupParent25}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild72} />
                <div className={styles.groupChild109} />
              </div>
              <div className={styles.headlineParent}>
                <div className={styles.headline}>HEADLINE</div>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild74} />
                  <b className={styles.b}>10</b>
                </div>
                <img className={styles.icon35} alt="" src="400.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent48}>
          <div className={styles.frameChild19} />
          <div className={styles.parent19}>
            <div className={styles.div88}>ツール</div>
            <div className={styles.overview}>OVERVIEW</div>
            <div className={styles.groupChild111} />
          </div>
          <div className={styles.groupParent35}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent20}>
              <div className={styles.div22}>範囲</div>
              <div className={styles.div90}>20</div>
            </div>
          </div>
          <div className={styles.groupParent37}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent20}>
              <div className={styles.div22}>警告</div>
              <div className={styles.div90}>00</div>
            </div>
          </div>
          <div className={styles.groupParent39}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent20}>
              <div className={styles.div22}>目的</div>
              <div className={styles.div90}>40</div>
            </div>
          </div>
          <div className={styles.groupParent41}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent23}>
              <div className={styles.xT90}>確率</div>
              <div className={styles.div90}>2.5</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent49}>
          <div className={styles.frameChild20} />
          <div className={styles.parent24}>
            <div className={styles.div97}>統 計</div>
            <div className={styles.statistics}>STATISTICS</div>
            <div className={styles.groupChild111} />
          </div>
          <div className={styles.groupParent35}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent25}>
              <div className={styles.div22}>ラベル</div>
              <div className={styles.div99}>20</div>
            </div>
          </div>
          <div className={styles.groupParent37}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild112} />
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.groupChild113} />
              </div>
            </div>
            <div className={styles.parent25}>
              <div className={styles.div22}>ラベル</div>
              <div className={styles.div101}>6.8</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="Mask Group.png" />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="Vector 11.svg" />
        <img className={styles.rectangleIcon} alt="" src="Rectangle 73.svg" />
        <div className={styles.layer}>
          <div className={styles.groupParent47}>
            <img className={styles.groupChild125} alt="" src="Group 2.svg" />
            <div className={styles.parent27}>
              <div className={styles.div22}>データ解析</div>
              <div className={styles.wm}>W/M</div>
              <img className={styles.icon38} alt="" src="232,300.svg" />
            </div>
          </div>
          <img className={styles.layerChild} alt="" src="Group 1.svg" />
          <img className={styles.layerItem} alt="" src="Group 134.svg" />
        </div>
      </div>
      <div className={styles.bgMask1} />
      <div className={styles.nav}>
        <div className={styles.logoTitle}>
          <img className={styles.frameIcon12} alt="" src="Frame.svg" />
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="logo.svg" />
            <div className={styles.sdvUiKitSmart}>
              SDV UI-Kit SMART CITY BIGDATA SYSTEM
            </div>
            <div className={styles.rectangleParent50}>
              <div className={styles.groupChild126} />
              <img className={styles.betaIcon1} alt="" src="Beta.svg" />
            </div>
          </div>
        </div>
        <div className={styles.space} />
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.wrapper6}>
              <div className={styles.div103}>[ ホーム ]</div>
            </div>
            <div className={styles.wrapper7}>
              <div className={styles.div104}>機能ページ-2</div>
            </div>
            <div className={styles.wrapper7}>
              <div className={styles.div104}>機能ページ-3</div>
            </div>
            <div className={styles.wrapper7}>
              <div className={styles.div104}>機能ページ-4</div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper}>
              <div className={styles.misccircuitBoardParent}>
                <img
                  className={styles.misccircuitBoardIcon1}
                  alt=""
                  src="Misc/circuit-board.svg"
                />
                <div className={styles.editionInformationParent}>
                  <div className={styles.editionInformation}>
                    Edition Information
                  </div>
                  <div className={styles.nextRelease}>{`V0.02 08/08 `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameChild21} />
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameWrapper}>
                <div className={styles.editionInformationParent}>
                  <div className={styles.editionInformation}>
                    Componentisation
                  </div>
                  <div className={styles.nextRelease}>Next Release</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.weatherParent}>
          <div className={styles.weather}>
            <div className={styles.smallRain}>
              <div className={styles.div107}>
                <img className={styles.imageIcon} alt="" src="image 3.png" />
                <img className={styles.imageIcon} alt="" src="image 4.png" />
              </div>
              <div className={styles.div108}>
                <img className={styles.imageIcon} alt="" src="image.png" />
              </div>
            </div>
          </div>
          <div className={styles.temp}>
            <img className={styles.icon39} alt="" src="32.svg" />
            <div className={styles.div109}>℃</div>
            <div className={styles.pm20}>PM 2.0</div>
            <div className={styles.tempChild} />
          </div>
          <div className={styles.parent28}>
            <img className={styles.icon40} alt="" src="09:01:00.svg" />
            <div className={styles.div110}>10/08/2021</div>
            <div className={styles.div111}>月曜日</div>
            <div className={styles.frameChild22} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
