// import Logo from '../components/Logo/Logo';

import './App.scss';
import styles from './App.module.scss';
import {Button} from './../components/Button/Button';

import logo1 from './../testAssets/Group1.png'
import logo2 from './../testAssets/Group1810.png'
import shadow from './../testAssets/Ellipse170.png'
import lightEllipse from './../testAssets/lightEllipse.png';
import league from './../testAssets/league.png'
import stadium from './../testAssets/location.png'
import {ReactComponent as IconRight} from './../testAssets/iconRight.svg';
import {ReactComponent as IconLeft} from './../testAssets/iconLeft.svg';
import {ReactComponent as IconCalendar} from './../testAssets/iconCalendar.svg';
import {ReactComponent as Ellipse180} from './../testAssets/Ellipse180.svg';
import {ReactComponent as MiroodlesMono} from './../testAssets/MiroodlesMono.svg';

function App() {


  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', background:'#D5D5D5'}} >
      <div className={styles.wrap}>
        <header className={styles.header} >
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}> 
            <img src={logo1 } style={{height: '40px', width: '40px'}} alt=''/>
             </div>
            <div className={styles.itemsContainer}>
              <ul>
                <li></li>
                <li>Корзина</li>
                <li>Магазин</li>
                <li>Мои заказы</li>
              </ul>
            </div>
          </div>
        </header>
      
      <main className={styles.wrapper}>

        <div className={styles.infoBanner}>
          <div className={styles.infoText}>
            <p>
              Внимание! На территории нашей арены действуют временные ограничения.
            </p>
          </div>
          <div className={styles.infoButton}>
            <div className={styles.infoButtonText}>Подробнее</div>
            <div className={styles.infoButtonIcon}><IconRight /></div>
          </div>
        </div>

        <div className={styles.matchBanner}>
        <div className={styles.backButton}>
            <div className={styles.backButtonIcon}><IconLeft /></div>
            <div className={styles.backButtonText}>Назад</div>
          </div>
          <div className={styles.matchBannerConteiner}>
            <div className={styles.teamConteiner}>
              <div className={styles.teamLogo}
                style={{
                  backgroundImage: `url(${shadow})`
                }}
              >
                {/* <Logo url={logo1} height={'90px'} width={'90px'}/> */}
                <img src={logo1 } style={{height: '90px', width: '90px'}} alt=''/>
              </div>
              <h3 className={styles.teamTitle}>Команда 1</h3>
              <p className={styles.teamSubtitle}>Ростов-на-Дону</p>
            </div>
            <div className={styles.infoConteiner}>
              <div className={styles.leagueConteiner}>
                <div className={styles.leagueIcon}>
                  {/* <Logo url={league} height={'18px'} width={'18px'}/> */}
                  <img src={league} style={{height: '18px', width: '18px'}} alt=''/>
                </div>
                <div className={styles.leagueTitle}>Регулярный сезон</div>
              </div>
              <div className={styles.dateConteiner}>
                <h3>Вс, 20 сентября 2020, 20:00</h3>
              </div>
              <div className={styles.stadiumContainer}>
                <div className={styles.stadiumIcon}>
                  {/* <Logo url={stadium} height={'16px'} width={'16px'}/> */}
                  <img src={stadium} style={{height: '16px', width: '16px'}} alt=''/>
                </div>
                <div className={styles.stadiumTitle}>баскет-холл</div>
              </div>
              <Button 
              label={'Купить билеты'}
              />
            </div>
            <div className={styles.teamConteiner}>
              <div className={styles.teamLogo}
                 style={{
                   backgroundImage: `url(${shadow})`
                 }}
              >
                {/* <Logo url={logo2} height={'90px'} width={'90px'}/> */}
                <img src={logo2} style={{height: '90px', width: '90px'}} alt=''/>
              </div>
              <h3 className={styles.teamTitle}>Команда 2</h3>
              <p className={styles.teamSubtitle}>Москва</p>
            </div>
          </div>
        </div>

        <div className={styles.titleBlock}><h3>Ближайшие события</h3></div>
          <div className={styles.eventsContainer}>
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              <div className={styles.eventArrow}><IconRight /></div>
            </div>
            
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              <div className={styles.eventArrow}><IconRight /></div>
            </div>
          </div>

        <div className={styles.titleBlock}><h3>Предстоящие события</h3></div>

        <div className={styles.eventsContainer}>
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              <div className={styles.eventArrow}></div>
            </div>
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              {/* <div className={styles.eventArrow}><IconRight /></div> */}
            </div>
          </div>
          <div className={styles.eventsContainer}>
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              <div className={styles.eventArrow}></div>
            </div>
            <div className={styles.eventContainer}>
              <div className={styles.eventLogo}
                style={{
                  backgroundImage: `url(${lightEllipse})`
                }}
              >
                <img src={logo2} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventLeague}><Ellipse180 /> регулярный сезон</div>
                <div className={styles.eventDate}><IconCalendar /> <span>вс </span> 12 фев 2021 20:00</div>
                <div className={styles.eventHomeTeam}>Команда 1</div>
                <div className={styles.eventGuestTeam}>vs Команда 2</div>
              </div>
              {/* <div className={styles.eventArrow}><IconRight /></div> */}
            </div>
          </div>

          <div className={styles.titleBlock}><h3>Абонементы</h3></div>

          <div className={styles.seasonTicketsContainer}>
            <div className={styles.seasonTicketContainer}>
              <div className={styles.seasonTicketInfo}>
              <div className={styles.seasonTicketLogo} >
                <img src={logo1} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
                <div className={styles.seasonTicketTitle}>Лучший фанат</div>
                <div className={styles.seasonTicketSubtitle}>Абонемент на все матчи плюс безлимитный фудкорт!</div>
              </div>
              <div className={styles.seasonTicketArrow}><IconRight /></div>
              <div className={styles.seasonTicketImg}><MiroodlesMono /></div>
            </div>

            <div className={styles.seasonTicketContainer}>
              <div className={styles.seasonTicketInfo}>
              <div className={styles.seasonTicketLogo} >
                <img src={logo1} style={{height: '70px', width: '70px'}} alt=''/>
              </div>
                <div className={styles.seasonTicketTitle}>Лучший фанат</div>
                <div className={styles.seasonTicketSubtitle}>Абонемент на все матчи плюс безлимитный фудкорт!</div>
              </div>
              <div className={styles.seasonTicketArrow}><IconRight /></div>
              <div className={styles.seasonTicketImg}><MiroodlesMono /></div>
            </div>

          </div>
                
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.copyContainer}> © Какой-то там копирайт</div>
          <div className={styles.publicContainer}>оферты всякие</div>
        </div>
      </footer>
    </div>
  </div>

  );
}

export default App;