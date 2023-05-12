import Question from "@/entities/Question";

type Props = {
  question: Question
  isLatest: boolean
}

function Message({ question, isLatest }: Props) {
  return (
    <div className={`chat-card ${isLatest ? 'pb-12' : ''}`}>
      <p className="px-4 border-l-4 border-secondary text-secondary text-md font-semibold">{question.question}</p>
      <div>
        <p className="px-5 text-md text-thinGray">{question.answer?.reply}</p>
        {question.answer?.data ? (
          <div className="flex gap-4 px-5 mt-4 flex-no-wrap overflow-y-hidden overflow-x-scroll">
            {question.answer.data.map(x => (
              <div 
                key={x.id} 
                className="h-[237px] w-[179px] shrink-0 rounded-xl relative" 
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND}/static/${x.id}.png)` }}
              >
                <div className="absolute left-2 bottom-2 w-[140px] bg-white bg-opacity-85 text-secondary font-semibold py-2 px-3 rounded-xl">
                  {x.names[0]}
                </div>
              </div>
            ))}
          </div>
        ): null}
      </div>
    </div>
  )
}

export default Message