const nav = (() => {
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

export default nav;