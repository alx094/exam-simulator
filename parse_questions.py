import re
import json

with open("extracted_text_2.txt", "r") as f:
    text = f.read()

questions = []

idx = text.rfind("Correct Answers")
questions_text = text[:idx]
answers_text = text[idx:]

# parse answers
answer_map = {}
answer_matches = re.findall(r'(\d+)\.\s*([A-E])', answers_text.replace('\n', ' '))
for match in answer_matches:
    answer_map[int(match[0])] = match[1]

# parse questions
question_blocks = re.split(r'Question \d+', questions_text)[1:]

for i, block in enumerate(question_blocks):
    q_num = i + 1
    
    positions = {}
    for opt in ['A.', 'B.', 'C.', 'D.', 'E.']:
        pos = block.find(opt)
        if pos != -1:
            positions[opt] = pos
            
    if not positions:
        continue
        
    sorted_opts = sorted(positions.items(), key=lambda x: x[1])
    
    question_text = block[:sorted_opts[0][1]].strip()
    question_text = question_text.replace('\ufb01', 'fi').replace('\ufb02', 'fl').replace('\x0c', '')
    
    options = {}
    for j in range(len(sorted_opts)):
        opt_letter = sorted_opts[j][0][0]
        start = sorted_opts[j][1] + 2 # skip "A."
        if j < len(sorted_opts) - 1:
            end = sorted_opts[j+1][1]
        else:
            end = len(block)
        
        opt_text = block[start:end].strip()
        opt_text = opt_text.replace('\ufb01', 'fi').replace('\ufb02', 'fl').replace('\x0c', '')
        options[opt_letter] = opt_text
        
    questions.append({
        "id": q_num,
        "question": question_text,
        "options": options,
        "answer": answer_map.get(q_num, "")
    })

with open("questions.js", "w") as f:
    f.write("const examData = " + json.dumps(questions, indent=2) + ";\n")

print(f"Parsed {len(questions)} questions")
