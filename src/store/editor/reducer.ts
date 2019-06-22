import {EditorActionTypes, EditorState, ImageData} from "./types";
import {Action} from "../Actions";

const initialState: EditorState = {
    activeImageIndex: null,
    projectType: null,
    imagesData: []
};

export function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    switch (action.type) {
        case Action.UPDATE_PROJECT_TYPE: {
            return {
                ...state,
                projectType: action.payload.projectType
            }
        }
        case Action.UPDATE_ACTIVE_IMAGE_INDEX: {
            return {
                ...state,
                activeImageIndex: action.payload.activeImageIndex
            }
        }
        case Action.UPDATE_IMAGE_DATA_BY_ID: {
            return {
                ...state,
                imagesData: state.imagesData.map((imageData: ImageData) =>
                    imageData.id === action.payload.id ? action.payload.newImageData : imageData
                )
            }
        }
        case Action.ADD_IMAGES_DATA: {
            return {
                ...state,
                imagesData: state.imagesData.concat(action.payload.imageData)
            }
        }
        default:
            return state;
    }
}