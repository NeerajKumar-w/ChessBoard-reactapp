import './ChessBoard.css';
import bp from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_pawn.png';
import br from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_rook.png';
import bh from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_knight.png';
import bb from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_bishop.png';
import bq from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_queen.png';
import bk from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/black_king.png';
import wp from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_pawn.png';
import wr from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_rook.png';
import wh from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_knight.png';
import wb from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_bishop.png';
import wq from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_queen.png';
import wk from '../assets/Pixel_Art_Chess_DevilsWorkshop_V04/chess/white_king.png';
import tr from '../assets/transparent.png';


function BoardElement(props) {
    const styles = {
        backgroundColor: props.color,
        height: '100px',
        width: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={styles} id={props.id}>
            <div><img style={{height:'50px',width:'50px'}} src={props.peice} alt="" /></div>
        </div>
    )
}



function ChessBoard() {
    const pieces = {
    'bp': bp,
    'br': br,
    'bh': bh,
    'bb': bb,
    'bq': bq,
    'bk': bk,
    'wp': wp,
    'wr': wr,
    'wh': wh,
    'wb': wb,
    'wq': wq,
    'wk': wk,
    '': tr,
    }
    const initialState = [
    'br', 'bh', 'bb', 'bq', 'bk', 'bb', 'bh', 'br',
    'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp',
    'wr', 'wh', 'wb', 'wq', 'wk', 'wb', 'wh', 'wr',    
]
    let swap = false;
    const board = []
    for (let i = 1; i <= 64; i++) {
            if (!swap) {
                board[i] = <BoardElement color={'green'} peice={pieces[initialState[i - 1]]} id={'' + i} />
                swap = true;
            }
            else {
                board[i] = <BoardElement color={'white'} peice={pieces[initialState[i - 1]]} id={'' + i} />
                swap = false;
            }
            if (i >= 8 && i % 8 === 0) {
                swap = !swap;
            }
    }
    return (
        <div className="Grid">
            {board}
        </div>
    )
}

export default ChessBoard;