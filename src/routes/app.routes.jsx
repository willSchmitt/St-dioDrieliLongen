import {Routes, Route} from 'react-router-dom';

import {Arrive} from '../pages/Arrive';
import {ArriveVideo} from '../pages/ArriveVideo';
import {Site} from '../pages/Site';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/arrive" element={<Arrive />} />
      <Route path="/arrivevideo" element={<ArriveVideo />} />
    </Routes>
  )
}