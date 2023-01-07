import React, { useState, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { FiDownload } from 'react-icons/fi';



const Export = ({ onExport }) => <button
    className='inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
    onClick={e => onExport(e.target.value)}
>
    CSV <FiDownload size={17} />
</button>;



export default function MyDataTable({ column, data }) {


    function convertArrayOfObjectsToCSV(array) {
        let result;
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(array[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }
    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }






    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, [data]);


    const updateState = useCallback(state => console.log(state), []);

    return (
        <DataTable
            columns={column}
            data={data}
            selectableRows
            hover={true}
            pagination={true}
            perPage={10}
            fixedHeader={true}
            fixedHeaderScrollHeight={'calc(100vh - 30rem)'}
            onSelectedRowsChange={updateState}
            actions={actionsMemo}
            expandOnRowClicked={true}
            autoWidth={true}




        />

    );
};