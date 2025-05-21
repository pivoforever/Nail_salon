<footer>
    <div class="container">
      <div class="footer_block">
        <img src="img/logo_turn.svg" alt="">
        <div class="contacts">
          <p>+7 (917)418-75-95</p>
          <p>единый номер телефона</p>
          <p>каждый день с 10:00 до 22:00</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/yourprofile/" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/yourprofile/" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
          <p>© Студия Avocado, г. Уфа</p>
          <p> Пр. Октября, 88</p>
        </div>
        <img src="img/logo_big.svg" alt="">
      </div>
    </div>
  </footer>
  </div>
  <!-- Модальное окно -->
  <div id="modal" class="modal">
    <div class="modal-content">
        <span id="closeModalBtn">&times;</span> <!-- Кнопка закрытия -->
        <h2>Запись на услуги</h2>
        <form>
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" required>
            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" name="phone" required>
            <label for="service">Услуга:</label>
            <select id="service" name="service">
                <option value="manicure">Маникюр</option>
                <option value="pedicure">Педикюр</option>
                <option value="design">Дизайн</option>
            </select>
            <button type="submit">Отправить</button>
        </form>
    </div>
  </div>
  <!-- <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.24/paper-full.min.js"></script>
  <script src="assets/js/main.js"></script> -->
  <!-- Добавьте эту строку перед закрывающим тегом </body> -->
  <!-- <script src="https://unpkg.com/scrollreveal"></script> -->
  <?php wp_footer(); ?>
</body>
</html>