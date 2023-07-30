import React,{ useState } from 'react';
import { Button,  Paper, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';

import useStyles from './styles';
import { createCsv } from '../../actions/csvs';

const Form = () => {

    const classes = useStyles();

    const [csvFileName, setCsvFileName ] = useState();
    const [csvUploadedData, setCsvUploadedData ] = useState();
    const [isUploadEnable, setIsUploadEnable] = useState(true);


    const dispatch = useDispatch();
    
    const onFileChange = async(e) => {

        const file=  await e.target.files[0];
        if (file) {
            const filedata =  await file.text();
            setCsvFileName(file.name);
            const result = parse(filedata, { header: true });
            // console.log(result.data);
            setCsvUploadedData(result.data);
            setIsUploadEnable(false);
        } 

    }

    const upload = () => {
        const csvUpload = { data: csvUploadedData , fileName: csvFileName };
        console.log(csvUpload);
        dispatch(createCsv(csvUpload));
        setIsUploadEnable(true);
        document.getElementById("newForm").reset();
        
    }

    const handleDownload = () => {
        const templateData = 'name,username,email,phone,website';
        download(templateData);
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

    return (

        <Paper className={classes.paper}>
            <form id="newForm" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
                <Typography variant="h6">Creating a Csv</Typography>
                <div className={classes.fileInput}><input type="file" accept=".csv"  onChange={ onFileChange } /></div>
                <Button className={classes.buttonDownload} variant="outlined" color="primary" size="large"  onClick={handleDownload} fullWidth>Download Template</Button>
                <Button variant="outlined" color="secondary" size="large" disabled={isUploadEnable} onClick={upload} fullWidth>Upload</Button>
            </form>
       </Paper>
       
    );
}

export default Form;

