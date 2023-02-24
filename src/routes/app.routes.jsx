import {Routes, Route} from 'react-router-dom';

import {Arrive} from '../pages/Arrive';
import {ArriveVideo} from '../pages/ArriveVideo';
import {Site} from '../pages/Site';
import { Diary } from '../pages/Diary';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/diary" element={<Diary />} />
      <Route path="/" element={<Site />} />
      <Route path="/arrive" element={<Arrive />} />
      <Route path="/arrivevideo" element={<ArriveVideo />} />
    </Routes>
  )
}