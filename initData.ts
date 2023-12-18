import * as fs from 'fs';
import { DatabaseSource } from './src/config/typeorm.config';
import { TouristSpotEntity } from './src/entities';

const loadJsonFile = (filePath: string): any => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

const insertData = (data: any): void => {
  DatabaseSource.initialize().then(() => {
    const repository = DatabaseSource.getRepository(TouristSpotEntity);

    data.forEach((element: any) => {
      console.log(element)
    });
  })
  .catch(() => console.log('db 연결 중 에러 . . .'))
}

const data = loadJsonFile('./initData.json');
insertData(data);

// function haversineDistance(lat1, lon1, lat2, lon2) {
//   function toRad(x) {
//     return x * Math.PI / 180;
//   }

//   const R = 6371; // 지구의 반경 (km)
//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);
//   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const d = R * c;
//   return d;
// }

// // 사용자의 현재 위치
// const userLat = /* 사용자의 위도 */;
// const userLon = /* 사용자의 경도 */;

// // 관광지 목록 순회
// for (const spot of touristSpots) {
//   const distance = haversineDistance(userLat, userLon, spot.latitude, spot.longitude);
//   if (distance <= 10) { // 10km 이내의 관광지
//     // 이 관광지는 사용자 근처에 있습니다.
//   }
// }
