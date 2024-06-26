export type DataResponseObject = {
    men: Array<BaseForm>,
    women: Array<BaseForm>,
}

export type BaseForm = {
    id: number,
    value: number,
}

export type Question = {
    id: string,
    value: string,
}

export type PostQuestionTypeDto = {
    value: string
}

export enum Gender {
    Man = 0,
    Woman = 1,
    Other = 2,
}

export type PostPersonDto = {
    name: string,
    gender: Gender,
    age: number,
    timeAtCompany: number,
    personalReflection: string
}

export type FormSubmitQuestionTypeDto = {
    questionTypeId?: string;
    value: number;
    answer: string;
}

export type PostFormSubmissionDto = {
    createdAt: Date;
    person: PostPersonDto;
    questions: FormSubmitQuestionTypeDto[];
}


export type PersonResponse = {
    id: string;
    name: string;
    gender: number;
    timeAtCompany: string;
    formSubmissions: (null | FormSubmissionResponse)[];
};
  
export type QuestionResponse = {
    id: string;
    questionTypeId: string;
    questionType: any;
    value: number;
    answer: string;
    formSubmissionId: string;
    formSubmission: any;
};
  
export type FormSubmissionResponse = {
    id: string;
    createdAt: string;
    personId: string;
    person: PersonResponse;
    questions: Array<QuestionResponse>;
};
  
export type APIFormsResponse = {
    requestedAt: string,
    formSubmissions: Array<FormSubmissionResponse>,
    aiInterpretation: AiInterpretationResponse
};

export type AiInterpretationResponse = {
    id: string;
    reflectionsInterpretation: string;
    realDataInterpretation: string;
    questionInterpretations: AiQuestionInterpretation[];
}

export type AiQuestionInterpretation = {
    id: string;
    questionTypeId: string;
    questionType: any;
    answerInterpretation: string;
    valueInterpretation: string;
    aiAnswerData: AiAnswerData;
}

export type AiAnswerData = {
    id: string;
    value: number[];
    wordLength: number[];
}

export type FormSubmissionArray = {
    formSubmissions: Array<FormSubmissionResponse>
}

// Distribution data format
export type DistributionData = {
    questionId?: string
    data?: Array<DistributionDataType>
}

export type DistributionDataType = {
    value: number,
    numberofmen: number,
    numberofwomen: number
}


export type DistributionDataResponse = {
    [key: string]: DistributionData;
};

export type GenderValue = {
    name: string,
    value: number
}

export type GenderDistribution = {
    [key: string]: Array<GenderValue>
}

export type ChartGenderDistribution = {
    name: string,
    female: number,
    male: number
}

export type ChartDistributionDict = {
    [key: string]: Array<ChartGenderDistribution>
}

export type scatterData = {
    satisfactionlevel: number;
    age: number;
}

export type scatterDataArr = {
    scatterMaleData: Array<scatterData>,
    scatterFemaleData: Array<scatterData>
}

export type scatterDataDict = {
    [key: string]: scatterDataArr
}

export type scatterAiData = {
    wordlength: number;
    value: number;
}

export type scatterAiDataArr = {
    scatterData: Array<scatterAiData>,
}

export type scatterAiDataDict = {
    [key: string]: scatterAiDataArr
}