/**
 * ð������
 * */

function bubbleSort(data) {
    let temp;

    for (let i = 0; i < data.length; i++) { //�Ƚ϶����ˣ��ӵ�һ�˿�ʼ

        for (let j = 0; j < data.length - i - 1; j++) { //ÿһ�˱Ƚ϶��ٴ���

            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}

let arr = [3, 1, 2, 3, 5, 6, 7, 1.5];

console.log(bubbleSort(arr));