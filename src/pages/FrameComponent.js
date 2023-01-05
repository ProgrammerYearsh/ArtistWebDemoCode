import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.artistWebWrapper}>
          <div className={styles.artistWeb}>Artist web</div>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Work</div>
          <div className={styles.home}>Contact</div>
          <div className={styles.home}>About</div>
        </div>
        <div className={styles.instagramParent}>
          <img className={styles.instagramIcon} alt="" src="../instagram.svg" />
          <img className={styles.instagramIcon} alt="" src="../pinterest.svg" />
          <img className={styles.instagramIcon} alt="" src="../linkedin.svg" />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.holaWrapper}>
            <div className={styles.hola}> Hola !</div>
          </div>
          <div className={styles.imSophieAProfessionalRec}>
            I’m sophie, A professional recognised artist.
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper}>
              <div className={styles.viewMyWorkParent}>
                <div className={styles.hola}>View My Work</div>
                <img
                  className={styles.chevronRightSquareIcon}
                  alt=""
                  src="../chevronrightsquare.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.contactMeWrapper}>
                <div className={styles.hola}>Contact Me</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.unsplashyoxvdw7qxpgIcon}
          alt=""
          src="../unsplashyoxvdw7qxpg@2x.png"
        />
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.featuredWorkWrapper}>
            <div className={styles.featuredWork}>Featured Work</div>
          </div>
          <button className={styles.frameButton}>
            <div className={styles.contactMeWrapper}>
              <div className={styles.goToContactSection}>
                Go to contact section
              </div>
            </div>
          </button>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.myStartJourneyParent}>
              <div className={styles.hola}>My start journey</div>
              <div className={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                amet etiam quis semper sit lacus blandit. Diam nam mi tortor
                feugiat nunc. Amet enim nisi ac imperdiet nisl.
              </div>
            </div>
            <div className={styles.liveView}>Live View</div>
          </div>
          <img
            className={styles.unsplashxHpilsdkekIcon}
            alt=""
            src="../unsplashxhpilsdkek@2x.png"
          />
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.myStartJourneyParent}>
              <div className={styles.hola}>My career growth</div>
              <div className={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                amet etiam quis semper sit lacus blandit. Diam nam mi tortor
                feugiat nunc. Amet enim nisi ac imperdiet nisl.
              </div>
            </div>
            <div className={styles.liveView}>Live View</div>
          </div>
          <img
            className={styles.unsplashxHpilsdkekIcon}
            alt=""
            src="../unsplashih7wpsjwomc@2x.png"
          />
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.frameParent5}>
            <div className={styles.myStartJourneyParent}>
              <div
                className={styles.hola}
              >{`Entering in professionalism `}</div>
              <div className={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                amet etiam quis semper sit lacus blandit. Diam nam mi tortor
                feugiat nunc. Amet enim nisi ac imperdiet nisl.
              </div>
            </div>
            <div className={styles.liveView}>Live View</div>
          </div>
          <img
            className={styles.unsplashxHpilsdkekIcon}
            alt=""
            src="../unsplashbokiptpzdpk@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameParent10}>
        <div className={styles.aLittleBitAboutMeParent}>
          <div className={styles.aLittleBitAboutMe}>A Little Bit About Me</div>
          <div className={styles.loremIpsumDolorSitAmetCo3}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu purus blandit luctus faucibus justo venenatis a. Auctor vitae sed arcu curabitur tincidunt nibh. Lacinia ornare magnis amet blandit nisl urna tincidunt eget. Urna sed etiam auctor ut netus sed sed. Gravida habitant eu gravida id neque, facilisis. `}</p>
            <p className={styles.loremIpsumDolor}>&nbsp;</p>
            <p
              className={styles.nequeLectusElit}
            >{`Neque lectus elit massa aenean turpis quam aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu purus blandit luctus faucibus justo venenatis a. `}</p>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.contactMeWrapper}>
              <div className={styles.hola}>Contact Me</div>
            </div>
          </div>
        </div>
        <img
          className={styles.unsplashbclqeqozljsIcon}
          alt=""
          src="../unsplashbclqeqozljs@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
