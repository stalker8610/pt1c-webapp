import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    return {
        serverFiles: [],
        clientFiles: [],
        ext1CFilesUT: [],
        ext1CFilesUNF: [],
        manualFiles: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    }
}

export const filesSlice = createSlice({
    name: 'files',
    initialState: getInitialState(),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFiles.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.serverFiles = action.payload.serverFiles;
                state.clientFiles = action.payload.clientFiles;
                state.ext1CFilesUT = action.payload.ext1CFilesUT;
                state.ext1CFilesUNF = action.payload.ext1CFilesUNF;
                state.manualFiles = action.payload.manualFiles;
                state.status = 'succeded';
            })
            .addCase(fetchFiles.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            })
    },
})

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
    const serverResponseSample = {
        "serverFiles": [
            {
                "fileName": "Telephony-server-1C_v3.6.4_ASV20230220.zip",
                "path": "Server\\Telephony-server-1C_v3.6.4_ASV20230220.zip",
                "size": 30011,
                "date": "2023-02-23T18:43:41.425Z"
            },
            {
                "fileName": "Telephony-server-1C_v3.6.5_ASV20230222.zip",
                "path": "Server\\Telephony-server-1C_v3.6.5_ASV20230222.zip",
                "size": 0,
                "date": "2023-02-23T18:43:26.595Z"
            }
        ],
        "clientFiles": [
            {
                "fileName": "Telephony-panel-1C_v2.3.3_ASV20230208.7z",
                "path": "Client\\Telephony-panel-1C_v2.3.3_ASV20230208.7z",
                "size": 0,
                "date": "2023-02-23T18:42:31.127Z"
            },
            {
                "fileName": "Telephony-panel-1C_v2.3.4_ASV20230213.7z",
                "path": "Client\\Telephony-panel-1C_v2.3.4_ASV20230213.7z",
                "size": 0,
                "date": "2023-02-23T18:42:18.681Z"
            }
        ],
        "manualFiles": [
            {
                "fileName": "ПТ1С_Руководство пользователя_УФ_v3.1_ASV20220608.docx",
                "path": "Documents\\UserManual\\ПТ1С_Руководство пользователя_УФ_v3.1_ASV20220608.docx",
                "size": 901465,
                "date": "2023-02-23T18:42:52.224Z"
            }
        ],
        "ext1CFilesUT": [
            {
                "fileName": "Telephony-panel-1C-UT_v2.24f12_20220701.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.24f12_20220701.cfe",
                "size": 356680,
                "date": "2023-02-23T12:17:09.077Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.26.5_20220608.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.26.5_20220608.cfe",
                "size": 144312,
                "date": "2023-02-23T12:17:09.162Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.27.1_20220803.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.27.1_20220803.cfe",
                "size": 224392,
                "date": "2023-02-23T12:17:09.201Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.27.2a_20221031.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.27.2a_20221031.cfe",
                "size": 224410,
                "date": "2023-02-23T12:17:09.248Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.27.2_20220909.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.27.2_20220909.cfe",
                "size": 224400,
                "date": "2023-02-23T12:17:09.291Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.29.1_20221102.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.29.1_20221102.cfe",
                "size": 223284,
                "date": "2023-02-23T12:17:09.333Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.29.2_20230124.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.29.2_20230124.cfe",
                "size": 223306,
                "date": "2023-02-23T12:17:09.403Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.30.1_20230127.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.30.1_20230127.cfe",
                "size": 224177,
                "date": "2023-02-23T12:17:09.464Z"
            },
            {
                "fileName": "Telephony-panel-1C-UT_v2.31.1_20230201.cfe",
                "path": "Extension1С\\UT\\Telephony-panel-1C-UT_v2.31.1_20230201.cfe",
                "size": 230096,
                "date": "2023-02-23T12:17:09.514Z"
            }
        ],
        "ext1CFilesUNF": [
            {
                "fileName": "Telephony-panel-1C-UNF_v2.26.5_20220608.cfe",
                "path": "Extension1С\\UNF\\Telephony-panel-1C-UNF_v2.26.5_20220608.cfe",
                "size": 144472,
                "date": "2023-02-23T12:17:08.845Z"
            },
            {
                "fileName": "Telephony-panel-1C-UNF_v2.27.1_20220804.cfe",
                "path": "Extension1С\\UNF\\Telephony-panel-1C-UNF_v2.27.1_20220804.cfe",
                "size": 224916,
                "date": "2023-02-23T12:17:08.893Z"
            },
            {
                "fileName": "Telephony-panel-1C-UNF_v2.27.2_20220909.cfe",
                "path": "Extension1С\\UNF\\Telephony-panel-1C-UNF_v2.27.2_20220909.cfe",
                "size": 224923,
                "date": "2023-02-23T12:17:08.941Z"
            },
            {
                "fileName": "Telephony-panel-1C-UNF_v2.29.1_20221102.cfe",
                "path": "Extension1С\\UNF\\Telephony-panel-1C-UNF_v2.29.1_20221102.cfe",
                "size": 223827,
                "date": "2023-02-23T12:17:08.984Z"
            },
            {
                "fileName": "Telephony-panel-1C-UNF_v2.30.1_20230127.cfe",
                "path": "Extension1С\\UNF\\Telephony-panel-1C-UNF_v2.30.1_20230127.cfe",
                "size": 197782,
                "date": "2023-02-23T12:17:09.028Z"
            }
        ]
    }

    let filesData = null;
    if (process.env.NODE_ENV === 'development') {
        filesData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                /* reject(new Error('some error occured')); */
                resolve(serverResponseSample);
            }, 1500);
        })
    } else {
        filesData = await fetch('/api/files').then(res => res.json());
        if (filesData.error) {
            throw new Error(filesData.error);
        }
    }

    return filesData;

})

export default filesSlice.reducer;

export const selectFilesForComponent = (component => {
    switch (component) {
        case 'server': return state => state.files.serverFiles;
        case 'client': return state => state.files.clientFiles;
        case 'extensionUT': return state => state.files.ext1CFilesUT;
        case 'extensionUNF': return state => state.files.ext1CFilesUNF;
        case 'manual': return state => state.files.manualFiles;
        default: throw new Error(`Unknown component ${component}`);
    }
})