import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Menu from './pages/menu';
import Intro from './pages/intro';
import Level1_part1_intro_start from './pages/Level1_part1_intro_start';
import Level1_part1_intro_end from './pages/Level1_part1_intro_end';
import Level2_intro_ancient_ruins from './pages/Level2_intro_ancient_ruins';
import Level1_part1 from './pages/Level1_part1';
import Level1_part2 from './pages/Level1_part2';
import Level1_part3 from './pages/Level1_part3';
import Level1_part2_intro from './pages/Level1_part2_intro';
import Level1_part4 from './pages/Level1_part4';
import Level1_part4_intro from './pages/Level1_part4_intro';
import Level1_part3_intro from './pages/Level1_part3_intro';
import Level2_intro_Palace_garden from './pages/Level2_intro_Palace_garden';
import Level2_intro_Palace_garden_end from './pages/Level2_intro_Palace_garden_end';
import Level2_intro from './pages/Level2_intro';
import Level2_Palace_garden from './pages/Level2_Palace_garden';
import Level2_intro_Former_Treasury from './pages/Level2_intro_Former_Treasury';
import Level2_intro_chrono_test from './pages/Level2_intro_chrono_test';
import Level2_end_chrono_test from './pages/Level2_end_chrono_test';
import Level2_chrono_test from './pages/Level2_chrono_test';
import Level2_alpen_quiz from './pages/Level2_alpen_quiz';
import Level2_intro_alpen_quiz from './pages/Level2_intro_alpen_quiz';

import Map from './pages/Map';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='menu' element={<Menu />} />
                <Route path='intro' element={<Intro />} />
                <Route path='Map' element={<Map />} />
                <Route path='Level1_part1_intro_start' element={<Level1_part1_intro_start />} />
                <Route path='Level1_part1_intro_end' element={<Level1_part1_intro_end />} />
                <Route path='Level2_intro_ancient_ruins' element={<Level2_intro_ancient_ruins />} />
                <Route path='Level2_intro_Palace_garden' element={<Level2_intro_Palace_garden />} />
                <Route path='Level2_intro_Palace_garden_end' element={<Level2_intro_Palace_garden_end />} />
                <Route path='Level2_intro' element={<Level2_intro />} />
                <Route path='Level2_intro_chrono_test' element={<Level2_intro_chrono_test />} />
                <Route path='Level2_end_chrono_test' element={<Level2_end_chrono_test />} />
                <Route path='Level2_chrono_test' element={<Level2_chrono_test />} />
                <Route path='Level2_alpen_quiz' element={<Level2_alpen_quiz />} />
                <Route path='Level2_intro_alpen_quiz' element={<Level2_intro_alpen_quiz />} />
                <Route path='Level2_Palace_garden' element={<Level2_Palace_garden />} />
                <Route path='Level2_intro_Former_Treasury' element={<Level2_intro_Former_Treasury />} />
                <Route path='Level1_part1' element={<Level1_part1 />} />
                <Route path='Level1_part2' element={<Level1_part2 />} />
                <Route path='Level1_part2_intro' element={<Level1_part2_intro />} />
                <Route path='Level1_part3' element={<Level1_part3 />} />
                <Route path='Level1_part3_intro' element={<Level1_part3_intro />} />
                <Route path='Level1_part4' element={<Level1_part4 />} />
                <Route path='Level1_part4_intro' element={<Level1_part4_intro />} />
            </Routes>
        </>
    );
};

export default App;
