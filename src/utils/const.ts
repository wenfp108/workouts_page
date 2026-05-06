// const
const MAPBOX_TOKEN =
  // For security reasons, please avoid using the default public token provided by Mapbox as much as possible.
  // Instead, manually add a new token and apply URL restrictions.
  // (please refer to https://github.com/yihong0618/running_page/issues/643#issuecomment-2042668580)
  'pk.eyJ1IjoiYmVuLTI5IiwiYSI6ImNrZ3Q4Ym9mMDBqMGYyeXFvODV2dWl6YzQifQ.gSKoWF-fMjhzU67TuDezJQ';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];
const MAP_LAYER_LIST = [
  'road-label',
  'waterway-label',
  'natural-line-label',
  'natural-point-label',
  'water-line-label',
  'water-point-label',
  'poi-label',
  'airport-label',
  'settlement-subdivision-label',
  'settlement-label',
  'state-label',
  'country-label',
];

const USE_GOOGLE_ANALYTICS = false;
const GOOGLE_ANALYTICS_TRACKING_ID = '';

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = false;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.6;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;
// update for now 2024/11/17 the privacy mode is true
//set to `true` if you want to display only the routes without showing the map.
const PRIVACY_MODE = false;
// update for now 2024/11/17 the lights on default is false
//set to `false` if you want to make light off as default, only effect when `PRIVACY_MODE` = false
const LIGHTS_ON =false;
//set to `true` if you want to show the 'Elevation Gain' column
const SHOW_ELEVATION_GAIN = true;
// richer title for the activity types (like garmin style)
const RICH_TITLE = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength: number, year: string): string =>
  `户外运动 ${yearLength} 年 ` + ( year === 'Total' ? '' : `，地图展示的是 ${year} 年的轨迹`);

const ENGLISH_INFO_MESSAGE = (yearLength: number, year: string): string =>
  `Logged ${yearLength} Years of Outdoor Journey` +  ( year === 'Total' ? '' : `, the map show routes in ${year}`);

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我去过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下来，不要停下探索的脚步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const RUN_TITLE = IS_CHINESE ? '跑步' : 'Run';
const TRAIL_RUN_TITLE = IS_CHINESE ? '越野跑' : 'Trail Run';
const SWIM_TITLE = IS_CHINESE ? '游泳' : 'Swim';
const RIDE_TITLE = IS_CHINESE ? '骑行' : 'Ride';
const INDOOR_RIDE_TITLE = IS_CHINESE ? '室内骑行' : 'Indoor Ride';
const VIRTUAL_RIDE_TITLE = IS_CHINESE ? '虚拟骑行' : 'Virtual Ride';
const HIKE_TITLE = IS_CHINESE ? '徒步' : 'Hike';
const ROWING_TITLE = IS_CHINESE ? '划船' : 'Rowing';
const KAYAKING_TITLE = IS_CHINESE ? '皮划艇' : 'Kayaking';
const SNOWBOARD_TITLE = IS_CHINESE ? '单板滑雪' : 'Snowboard';
const SKI_TITLE = IS_CHINESE ? '双板滑雪' : 'Ski';
const BACKCOUNTRY_SKI_TITLE = IS_CHINESE ? '野外滑雪' : 'BackcountrySki';
const ROAD_TRIP_TITLE = IS_CHINESE ? '自驾' : 'RoadTrip';
const FLIGHT_TITLE = IS_CHINESE ? '飞行' : 'Flight';
const RUN_TREADMILL_TITLE = IS_CHINESE ? '跑步机' : 'Treadmill Run';
const ALL_TITLE = IS_CHINESE ? '所有' : 'All';
const ACTIVITY_COUNT_TITLE = IS_CHINESE ? '活动次数' : 'Activity Count';
const MAX_DISTANCE_TITLE = IS_CHINESE ? '最远距离' : 'Max Distance';
const MAX_SPEED_TITLE = IS_CHINESE ? '最快速度' : 'Max Speed';
const TOTAL_TIME_TITLE = IS_CHINESE ? '总时间' : 'Total Time';
const AVERAGE_SPEED_TITLE = IS_CHINESE ? '平均速度' : 'Average Speed';
const TOTAL_DISTANCE_TITLE = IS_CHINESE ? '总距离' : 'Total Distance';
const AVERAGE_DISTANCE_TITLE = IS_CHINESE ? '平均距离' : 'Average Distance';
const TOTAL_ELEVATION_GAIN_TITLE = IS_CHINESE ? '总海拔爬升' : 'Total Elevation Gain';
const AVERAGE_HEART_RATE_TITLE = IS_CHINESE ? '平均心率' : 'Average Heart Rate';
const YEARLY_TITLE = IS_CHINESE ? 'Year' : 'Yearly';
const MONTHLY_TITLE = IS_CHINESE ? 'Month' : 'Monthly';
const WEEKLY_TITLE = IS_CHINESE ? 'Week' : 'Weekly';
const DAILY_TITLE = IS_CHINESE ? 'Day' : 'Daily';
const LOCATION_TITLE = IS_CHINESE ? 'Location' : 'Location';
const HOME_PAGE_TITLE = IS_CHINESE ? '首页' : 'Home';
const LOADING_TEXT = IS_CHINESE ? '加载中...' : 'Loading...';
const NO_ROUTE_DATA = IS_CHINESE ? '暂无路线数据' : 'No route data';
const INVALID_ROUTE_DATA = IS_CHINESE ? '路线数据无效' : 'Invalid route data';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  RUN_TITLE,
  TRAIL_RUN_TITLE,

  SWIM_TITLE,
  RIDE_TITLE,
  INDOOR_RIDE_TITLE,
  VIRTUAL_RIDE_TITLE,
  HIKE_TITLE,
  ROWING_TITLE,
  KAYAKING_TITLE,
  SNOWBOARD_TITLE,
  SKI_TITLE,
  BACKCOUNTRY_SKI_TITLE,
  ROAD_TRIP_TITLE,
  FLIGHT_TITLE,
  RUN_TREADMILL_TITLE,
  ALL_TITLE,
};

const TYPES_MAPPING = {
  Run: RUN_TITLES.RUN_TITLE,
  'Trail Run': RUN_TITLES.TRAIL_RUN_TITLE,
  Swim: RUN_TITLES.SWIM_TITLE,
  Ride: RUN_TITLES.RIDE_TITLE,
  VirtualRide: RUN_TITLES.VIRTUAL_RIDE_TITLE,
  'Indoor Ride': RUN_TITLES.INDOOR_RIDE_TITLE,
  Hike: RUN_TITLES.HIKE_TITLE,
  Rowing: RUN_TITLES.ROWING_TITLE,
  Kayaking: RUN_TITLES.KAYAKING_TITLE,
  Snowboard: RUN_TITLES.SNOWBOARD_TITLE,
  Ski: RUN_TITLES.SKI_TITLE,
  RoadTrip: RUN_TITLES.ROAD_TRIP_TITLE,
  Flight: RUN_TITLES.FLIGHT_TITLE,
  'Treadmill Run': RUN_TITLES.RUN_TREADMILL_TITLE,
  all: RUN_TITLES.ALL_TITLE,
}

const ACTIVITY_TOTAL = {
    ACTIVITY_COUNT_TITLE,
    MAX_DISTANCE_TITLE,
    MAX_SPEED_TITLE,
    TOTAL_TIME_TITLE,
    AVERAGE_SPEED_TITLE,
    TOTAL_DISTANCE_TITLE,
    AVERAGE_DISTANCE_TITLE,
    TOTAL_ELEVATION_GAIN_TITLE,
    AVERAGE_HEART_RATE_TITLE,
    YEARLY_TITLE,
    MONTHLY_TITLE,
    WEEKLY_TITLE,
    DAILY_TITLE,
    LOCATION_TITLE,
};

export {
  USE_GOOGLE_ANALYTICS,
  GOOGLE_ANALYTICS_TRACKING_ID,
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
  PRIVACY_MODE,
  LIGHTS_ON,
  SHOW_ELEVATION_GAIN,
  RICH_TITLE,
  ACTIVITY_TOTAL,
  TYPES_MAPPING,
  HOME_PAGE_TITLE,
  LOADING_TEXT,
  NO_ROUTE_DATA,
  INVALID_ROUTE_DATA,
};

const nike = 'rgb(224,237,94)';
const yellow = 'rgb(224,237,94)';
const yellow_compl = 'rgb(106, 94, 237)';
const green = 'rgb(0,237,94)';
const pink = 'rgb(237,85,219)';
const cyan = 'rgb(112,243,255)';
const IKB = 'rgb(0,47,167)';
const dark_vanilla = 'rgb(228,212,220)';
const gold = 'rgb(242,190,69)';
const purple = 'rgb(154,118,252)';
const purple2 = 'rgb(127, 34, 254)';
const veryPeri = 'rgb(105,106,173)'; //长春花蓝
const red = 'rgb(255,0,0)'; //大红色
const DeepSkyBlue = 'rgb(0,191,255)';
const Orchid = 'rgb(218,112,214)';
// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = green;
export const MAIN_COLOR_LIGHT = purple2;

// Static color constants
export const RUN_COLOR_LIGHT = '#47b8e0';
export const RUN_COLOR_DARK = MAIN_COLOR;

// Single run animation colors
export const SINGLE_RUN_COLOR_LIGHT = '#52c41a'; // Green for light theme
export const SINGLE_RUN_COLOR_DARK = '#ff4d4f'; // Red for dark theme

// Helper function to get theme-aware SINGLE_RUN_COLOR
export const getRuntimeSingleColor = (
  typeColor: string[] = [MAIN_COLOR, MAIN_COLOR_LIGHT]
): string => {
  if (typeof window === 'undefined') return SINGLE_RUN_COLOR_DARK;

  const dataTheme = document.documentElement.getAttribute('data-theme');
  const savedTheme = localStorage.getItem('theme');

  // Determine current theme (default to dark)
  const isDark =
    dataTheme === 'dark' ||
    (!dataTheme && savedTheme === 'dark') ||
    (!dataTheme && !savedTheme);

  return isDark ? typeColor[0] : typeColor[1];
};

// Colors: [dark_theme, light_theme]
export const RUN_COLOR = [yellow, yellow_compl];
export const RIDE_COLOR = [DeepSkyBlue, DeepSkyBlue];
export const VIRTUAL_RIDE_COLOR = [veryPeri, veryPeri];
export const HIKE_COLOR = [Orchid, Orchid];
export const SWIM_COLOR = [gold, gold];
export const ROWING_COLOR = [cyan, cyan];
export const ROAD_TRIP_COLOR = [purple, purple];
export const FLIGHT_COLOR = [dark_vanilla, dark_vanilla];
export const KAYAKING_COLOR = [red, red];
export const SNOWBOARD_COLOR = [dark_vanilla, dark_vanilla];
export const TRAIL_RUN_COLOR = [IKB, IKB];
export const PROVINCE_FILL_COLOR = '#47b8e0';
export const COUNTRY_FILL_COLOR = dark_vanilla;
export const INDOOR_COLOR = '#8899aa';

// map tiles vendor, maptiler or mapbox or stadiamaps
export const MAP_TILE_VENDOR = 'mapcn';

// map tiles style name, see MAP_TILE_STYLES for more details
export const MAP_TILE_STYLE_LIGHT = 'osm-bright';
export const MAP_TILE_STYLE_DARK = 'dark-matter';

// access token. you can apply a new one, it's free.
// mapcn: empty
export const MAP_TILE_ACCESS_TOKEN = '';

export const MAP_TILE_STYLES = {
  mapcn: {
    'osm-bright':
      'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    'osm-liberty':
      'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    'dark-matter':
      'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  },
  mapcn_openfreemap: {
    'osm-bright': 'https://tiles.openfreemap.org/styles/bright',
    'dark-matter': 'https://tiles.openfreemap.org/styles/dark',
  },
  mapcn_maptiler_free: {
    'osm-bright': 'https://tiles.openfreemap.org/styles/bright',
    'dark-matter': 'https://tiles.openfreemap.org/styles/dark',
  },
  maptiler: {
    'dataviz-light': 'https://api.maptiler.com/maps/dataviz/style.json?key=',
    'dataviz-dark':
      'https://api.maptiler.com/maps/dataviz-dark/style.json?key=',
    'basic-light': 'https://api.maptiler.com/maps/basic-v2/style.json?key=',
    'basic-dark': 'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=',
    'streets-light': 'https://api.maptiler.com/maps/streets-v2/style.json?key=',
    'streets-dark':
      'https://api.maptiler.com/maps/streets-v2-dark/style.json?key=',
    'outdoor-light': 'https://api.maptiler.com/maps/outdoor-v2/style.json?key=',
    'outdoor-dark':
      'https://api.maptiler.com/maps/outdoor-v2-dark/style.json?key=',
    'bright-light': 'https://api.maptiler.com/maps/bright-v2/style.json?key=',
    'bright-dark':
      'https://api.maptiler.com/maps/bright-v2-dark/style.json?key=',
    'topo-light': 'https://api.maptiler.com/maps/topo-v2/style.json?key=',
    'topo-dark': 'https://api.maptiler.com/maps/topo-v2-dark/style.json?key=',
    'winter-light': 'https://api.maptiler.com/maps/winter-v2/style.json?key=',
    'winter-dark':
      'https://api.maptiler.com/maps/winter-v2-dark/style.json?key=',
    hybrid: 'https://api.maptiler.com/maps/hybrid/style.json?key=',
  },
  stadiamaps: {
    'alidade-smooth':
      'https://tiles.stadiamaps.com/styles/alidade-smooth.json?api_key=',
    'alidade-smooth-dark':
      'https://tiles.stadiamaps.com/styles/alidade-smooth-dark.json?api_key=',
    outback:
      'https://tiles.stadiamaps.com/styles/outback.json?api_key=',
    osm_bright:
      'https://tiles.stadiamaps.com/styles/osm_bright.json?api_key=',
  },
};