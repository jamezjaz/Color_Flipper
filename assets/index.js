const colors = ['red', 'blue', 'green', 'purple', 'yellow', '#F15025', 
                'indigo', 'rgba(255, 133, 200)', 
                'rgb(255,215,0)', 'rgb(255,165,0)', '#808000', 
                '#000000', '#FFFFFF', '#FF00FF'
                ];

const calculator = (() => {
  const header = document.getElementById('header');
  header.innerHTML = `
                    <nav class="navbar navbar-light header">
                      <a class="navbar-brand text-light" href="#">
                        <i class="fas fa-repeat p-2"></i>
                          Color Flipper
                        </a>
                      <a class="navbar-brand text-light" href="#">
                        <span class="px-4">Jamezjaz</span
                        <span>Simple Project</span
                      </a>
                    </nav>
                    `;
})();

const main = (() => {
  const button = document.getElementById('btn');
  const color = document.querySelector('.color')
  button.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  })
})();

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}
