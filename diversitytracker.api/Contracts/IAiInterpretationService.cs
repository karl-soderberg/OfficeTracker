using diversitytracker.api.Models;
using diversitytracker.api.Models.OpenAi;

namespace diversitytracker.api.Contracts
{
    public interface IAiInterpretationService
    {
        Task<AiInterpretation> InterperetAllPersonalReflections(List<FormSubmission> formSubmissions, List<QuestionType> questionTypes);
        Task<AiInterpretation> InterperetAllData(List<FormSubmission> formSubmissions, List<QuestionType> questionTypes);
        Task<AiInterpretation> InterperetQuestionDataSeperated(List<FormSubmission> formSubmissions, List<QuestionType> questionTypes);
        Task<AiInterpretation> InterperetQuestionAnswersSeperated(List<FormSubmission> formSubmissions, List<QuestionType> questionTypes);
        Task<AiInterpretation> CreateDataFromQuestionAnswers(List<FormSubmission> formSubmissions, List<QuestionType> questionTypes);
    }
}