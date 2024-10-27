// reducer.js

import { ADD_KYC_DOCUMENTS, ADD_KYC_DOCUMENTS_NAME, CHECK_KYC_DOCUMENT_STATUS, CHECK_KYC_DOCUMENT_STATUS_FAILURE, CHECK_KYC_DOCUMENT_STATUS_SUCCESS, REMOVE_KYC_DOCUMENT, UPLOAD_KYC_DOCUMENT_FAILURE, UPLOAD_KYC_DOCUMENT_REQUEST, UPLOAD_KYC_DOCUMENT_SUCCESS } from "../type";


const initialState = {
    documents: null,  // Store only one image
    documentstatus: null,
    documentname: null,
    loading: false,
    KycUpload: {
        status: null,
        loading: false
    }
};

const Kycdocumentsreducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_KYC_DOCUMENTS:
            return {
                ...state,
                documents: action.payload  // Store the uploaded image
            };
        case ADD_KYC_DOCUMENTS_NAME:
            return {
                ...state,
                documentname: action.payload  // Store the uploaded image
            };
        case REMOVE_KYC_DOCUMENT:
            return {
                ...state,
                documents: null  // Remove the image
            };
        case CHECK_KYC_DOCUMENT_STATUS:
            return {
                ...state,
                loading: true
            }
        case CHECK_KYC_DOCUMENT_STATUS_SUCCESS:
            return {
                ...state,
                documentstatus: action.payload,
                loading: false
            }
        case CHECK_KYC_DOCUMENT_STATUS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case UPLOAD_KYC_DOCUMENT_REQUEST:
            return {
                ...state,
                KycUpload: {
                    status: action.payload,
                    loading: true
                }
            }
        case UPLOAD_KYC_DOCUMENT_SUCCESS:
            return {
                ...state,
                KycUpload: {
                    status: action.payload,
                    loading: false
                }
            }
        case UPLOAD_KYC_DOCUMENT_FAILURE:
            return {
                ...state,
                KycUpload: {
                    status: action.payload,
                    loading: false
                }
            }
        default:
            return state;
    }
};

export default Kycdocumentsreducer;
