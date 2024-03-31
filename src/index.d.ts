export default jsPDFInvoiceTemplate;
export namespace OutputType {
    const Save: string;
    const DataUriString: string;
    const DataUri: string;
    const DataUrlNewWindow: string;
    const Blob: string;
    const ArrayBuffer: string;
}
import { jsPDF } from "jspdf";
/**
 *
 * @param { {
 *  outputType: OutputType | string,
 *  returnJsPDFDocObject?: boolean,
 *  fileName: string,
 *  orientationLandscape?: boolean,
 *  logo?: {
 *      src?: string,
 *      width?: number,
 *      height?: number,
 *      margin?: {
 *        top?: number,
 *        left?: number
 *      }
 *   },
 *   business?: {
 *       name?: string,
 *       address?: string,
 *       phone?: string,
 *       email?: string,
 *       email_1?: string,
 *       website?: string,
 *   },
 *   contact?: {
 *       label?: string,
 *       name?: string,
 *       address?: string,
 *       phone?: string,
 *       email?: string,
 *       otherInfo?: string,
 *   },
 *   invoice?: {
 *       label?: string,
 *       invTotalLabel?: string,
 *       num?: number,
 *       invDate?: string,
 *       invGenDate?: string,
 *       headerBorder?: boolean,
 *       tableBodyBorder?: boolean,
 *       header?: string[],
 *       table?: any,
 *       invTotal?: string,
 *       invCurrency?: string,
 *       invDescLabel?: string,
 *       invDesc?: string,
 *       row1?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
 *       },
 *       row2?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
 *       },
 *   },
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
declare function jsPDFInvoiceTemplate(props: {
    outputType: {
        Save: string;
        DataUriString: string;
        DataUri: string;
        DataUrlNewWindow: string;
        Blob: string;
        ArrayBuffer: string;
    } | string;
    returnJsPDFDocObject?: boolean;
    fileName: string;
    orientationLandscape?: boolean;
    logo?: {
        src?: string;
        width?: number;
        height?: number;
        margin?: {
            top?: number;
            left?: number;
        };
    };
    business?: {
        name?: string;
        address?: string;
        phone?: string;
        email?: string;
        email_1?: string;
        website?: string;
    };
    contact?: {
        label?: string;
        name?: string;
        address?: string;
        phone?: string;
        email?: string;
        otherInfo?: string;
    };
    invoice?: {
        label?: string;
        invTotalLabel?: string;
        num?: number;
        invDate?: string;
        invGenDate?: string;
        headerBorder?: boolean;
        tableBodyBorder?: boolean;
        header?: string[];
        table?: any;
        invTotal?: string;
        invCurrency?: string;
        invDescLabel?: string;
        invDesc?: string;
        row1?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };
        row2?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };
        row3?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
            row4?: {
                col1?: string;
                col2?: string;
                col3?: string;
                style?: {
                    fontSize?: number;
                };
            };
            row5?: {
                col1?: string;
                col2?: string;
                col3?: string;
                style?: {
                    fontSize?: number;
                };
            };
            row6?: {
                col1?: string;
                col2?: string;
                col3?: string;
                style?: {
                    fontSize?: number;
                };
            };
        };
        row7?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };

        row8?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };

        row9?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };

        row10?: {
            col1?: string;
            col2?: string;
            col3?: string;
            style?: {
                fontSize?: number;
            };
        };
    };
    footer?: {
        text?: string;
    };
    pageEnable?: boolean;
    pageLabel?: string;
}): {
    pagesNumber: number;
    jsPDFDocObject?: jsPDF;
    blob?: Blob;
    dataUriString?: string;
    arrayBuffer?: ArrayBuffer;
};
export { jsPDF };
