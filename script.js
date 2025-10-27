    const container = document.createElement('div');
    container.className = 'container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center';
    container.style.background = 'linear-gradient(145deg, #4E56C0, #FDCFFA)';
    container.style.color = 'white';
    container.style.fontFamily = 'Arial, sans-serif';

    const inputField = document.createElement('div');
    inputField.className = 'p-4 rounded-4 shadow mb-4';
    inputField.style.background = 'rgba(255,255,255,0.1)';
    inputField.style.maxWidth = '400px';
    inputField.style.width = '90%';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.innerText = 'Введіть своє питання:';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mb-3';

    const button = document.createElement('button');
    button.className = 'btn btn-blue';
    button.style.background = 'rgba(255, 255, 255, 0.24)';
    button.innerText = 'Запитати';

    const fortuneSphere = document.createElement('div');
    fortuneSphere.className = 'd-flex align-items-center justify-content-center mb-4';
    fortuneSphere.innerText = '?';
    fortuneSphere.style.width = '500px';
    fortuneSphere.style.height = '500px';
    fortuneSphere.style.borderRadius = '50%';
    fortuneSphere.style.background = 'radial-gradient(circle at center, #4E56C0, #000)';
    fortuneSphere.style.boxShadow = '0 0 30px rgba(4, 3, 7, 0.8)';
    fortuneSphere.style.fontSize = '25px';

    const answers = [
      'Так', 'Ні', 'Можливо', 'Без сумніву', 'Нажаль', 
      'Вірогідно', 'Скоріше за все', 'Не впевнений'
    ];

    button.addEventListener('click', () => {
      const question = input.value.trim();
      if (question === '') {
        alert('Будь ласка, введіть питання!');
        return;
      }

      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      fortuneSphere.innerText = randomAnswer;
    });

    inputField.appendChild(label);
    inputField.appendChild(input);
    inputField.appendChild(button);

    container.appendChild(fortuneSphere);
    container.appendChild(inputField);
    document.body.appendChild(container);