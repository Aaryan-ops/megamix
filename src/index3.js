import br from 'react-dom'
import Main_index3 from './comps1/Main_index3';
import './presentation/index3.css'
import Carding from './comp2/Carding';
const inlineCss={color:"brown",fontSize:"3em"};
br.render([<h1 key="i31" title={'this content is editable.'} contentEditable={true}> Hello mugen</h1>,<Main_index3 key="i32" /> ,<span  key="3d" style={inlineCss}>The only time you fail is when you fall down and stay down. </span>,<Carding key="43d" />],window.document.getElementById('index3'));