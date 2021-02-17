import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Info
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Выбран пользователь</TableCell>
                                        <TableCell>Описание</TableCell>
                                        <TableCell align="right">Адрес проживания</TableCell>
                                        <TableCell align="right">Город</TableCell>
                                        <TableCell align="right">Провинция/штат</TableCell>
                                        <TableCell align="right">Индекс</TableCell>
                                    </TableRow>
                                </TableHead>
                          {row.address ? <TableBody>
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.firstName}{row.secondName}
                                            </TableCell>
                                            <TableCell>{row.description}</TableCell>
                                            <TableCell align="right">{row.address.streetAddress}</TableCell>
                                            <TableCell align="right">{row.address.city}</TableCell>
                                            <TableCell align="right">{row.address.state}</TableCell>
                                            <TableCell align="right">{row.address.zip}</TableCell>
                                        </TableRow>
                                </TableBody> : ''}
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
class CollapsibleTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        sortRow:this.props.sortRow,
        totalPages:(this.props.forms.length/50),
        currentPage:Number(1),
        elementsOnPage:50
        }

    }
    onPageChange(currentPage) {
        this.setState({currentPage});
    }
    clickOnColumnType(type){
        this.setState({sortRow:!this.state.sortRow})
        this.props.filterColumn(type, {sortRow: this.state.sortRow})
    }
    render() {
        const { currentPage,elementsOnPage } = this.state;
        const indexOfLastTodo = currentPage * elementsOnPage;
        const indexOfFirstTodo = indexOfLastTodo - elementsOnPage;
        const currentElements = this.props.forms.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.forms.length / elementsOnPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell onClick={() => this.clickOnColumnType({column: 'id'})}>id {!this.props.sortRow?'▲':'▼'}</TableCell>
                            <TableCell onClick={() => this.clickOnColumnType({column: 'firstName'})} align="right">First
                                Name {!this.props.sortRow?'▲':'▼'}</TableCell>
                            <TableCell onClick={() => this.clickOnColumnType({column: 'secondName'})} align="right">Second
                                Name {!this.props.sortRow?'▲':'▼'}</TableCell>
                            <TableCell onClick={() => this.clickOnColumnType({column: 'email'})}
                                       align="right">Email {!this.props.sortRow?'▲':'▼'}</TableCell>
                            <TableCell onClick={() => this.clickOnColumnType({column: 'phone'})}
                                       align="right">Phone {!this.props.sortRow?'▲':'▼'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentElements.map((row) => {
                            return <Row key={row.id+row.firstName+Math.random()} row={row}/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
                {pageNumbers.map(e=> <button onClick={()=>this.onPageChange(e)}>{e}</button>)}
            </>
        );
    }
}
export default CollapsibleTable;
