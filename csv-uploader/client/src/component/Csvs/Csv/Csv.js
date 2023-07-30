import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import useStyles from './styles';
import csvImage1 from '../../../images/1.png';
import csvImage2 from '../../../images/2.jpeg';
import csvImage3 from '../../../images/3.png';
import csvImage4 from '../../../images/4.png';
import { deleteCsv } from '../../../actions/csvs';

    
const Csv = ({ csv }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const images = [csvImage1, csvImage2, csvImage3, csvImage4];
    // console.log(csv);


    const objectToCsv = function(data) {

        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));
 
        //loop over the rows
        for (const row of data){
            const values = headers.map(header => {
                const escaped = (''+row[header]).replace(/"/g, '\\"');
                // console.log(escaped)
                return `"${escaped}"`;
            });
            csvRows.push(values.join(','));
        }
        // console.log(csvRows);
        return csvRows.join('\n');

    }

    const download = function(data) {

        const blob = new Blob([data], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'download.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeAttribute(a);

    }


    const handleDownload = () => {

        console.log(csv.data);
        const requiredData = csv.data;
        const data = requiredData.map( row => ({
            name: row.name,
            username: row.username,
            email: row.email,
            phone: row.phone,
            website: row.website
        }     
        ));
        // console.log(data);
        const csvData = objectToCsv(data);
        console.log(csvData);
        download(csvData);

    }

    const openCsv = () => {

       history.push(`/csvs/${csv._id}`);

    }

    return (

        <Card className={classes.card} raised elevation={6} >
            <ButtonBase  className={classes.cardAction} component="span" onClick={openCsv} >
                <CardMedia className={classes.media} image={images[Math.floor(Math.random() * images.length)]} title={csv.fileName} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{csv.fileName}</Typography>
                    <Typography variant="body2">{moment(csv.createdAt).fromNow()}</Typography>
                </div>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={ handleDownload }>
                    <CloudDownloadIcon fontSize="small" />
                    &nbsp; &nbsp;Download &nbsp;
                </Button>
                <Button size="small" color="primary" onClick={() => { dispatch(deleteCsv(csv._id))} }>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>     
        </Card>

    );

    // return (
    //     <Card className={classes.card}>
    //         <CardContent>  
    //             <TableContainer>
    //                 <Table className={classes.table} aria-label="simple table">
    //                     <TableHead>
    //                         <TableRow>
    //                         <TableCell>Name</TableCell>
    //                         <TableCell align="right">username</TableCell>
    //                         <TableCell align="right">Email</TableCell>
    //                         <TableCell align="right">Phone</TableCell>
    //                         <TableCell align="right">Website</TableCell>
    //                         </TableRow>
    //                     </TableHead>
    //                     <TableBody>
    //                         <TableRow key={csv.name}>
    //                             <TableCell component="th" scope="row">
    //                             {csv.name}
    //                             </TableCell>
    //                             <TableCell align="right">{csv.username}</TableCell>
    //                             <TableCell align="right">{csv.email}</TableCell>
    //                             <TableCell align="right">{csv.phone}</TableCell>
    //                             <TableCell align="right">{csv.website}</TableCell>
    //                         </TableRow>
    //                     </TableBody>
    //                 </Table>
    //             </TableContainer>
    //         </CardContent> 
    //         <CardActions className={classes.cardActions}>
    //             <Button size="small" color="primary" onClick={() => { } }>
    //                 <CloudDownloadIcon fontSize="small" />
    //                 &nbsp; Download &nbsp;
    //                 {csv.likeCount}
    //             </Button>
    //             <Button size="small" color="primary" onClick={() => { } }>
    //                 <DeleteIcon fontSize="small" />
    //                 Delete
    //             </Button>
    //         </CardActions>     
    //     </Card>
    // );
}

export default Csv;
