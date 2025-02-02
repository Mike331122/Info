<h1>Randoms</h1>

<p>
    Randoms to aplikacja zbudowana na frameworku <strong>Nuxt 3</strong> i korzystająca z szablonu <strong>Docus</strong>. 
    Aplikacja demonstruje integrację z kilkoma różnymi API, umożliwiając użytkownikom interakcję z dynamicznymi danymi. 
    Główne funkcjonalności obejmują wyszukiwanie celebrytów, zarządzanie postami oraz przeglądanie produktów. 
</p>

<h2>Podgląd aplikacji:</h2>
<p>Aplikacja jest hostowana na platformie <strong>Netlify</strong> i dostępna pod tym <a href="https://random-api-app.netlify.app" target="_blank">linkiem</a>.</p>
<p>Obraz poglądowy aplikacji:</p>
<img src="./public/Random-App.png" alt="Zrzut ekranu aplikacji Randoms" width="600">

<h2>Funkcjonalności aplikacji:</h2>
<ul>
    <li>
        <strong>Wyszukiwanie celebrytów:</strong>
        <p>Aplikacja korzysta z <strong>API Ninja</strong>, aby umożliwić użytkownikom wyszukiwanie informacji o celebrytach. 
        Aby skorzystać z tej funkcjonalności, wymagane jest posiadanie klucza API.</p>
    </li>
    <li>
        <strong>Zarządzanie postami:</strong>
        <p>Dzięki <strong>JSONPlaceholder API</strong> użytkownicy mogą przeglądać, dodawać, edytować oraz usuwać posty. 
        Każda operacja jest realizowana z użyciem dynamicznych tras, umożliwiając łatwą interakcję poprzez przeglądarkę.</p>
    </li>
    <li>
        <strong>Przegląd produktów:</strong>
        <p>Integracja z <strong>Fake Store API</strong> pozwala użytkownikom na przeglądanie produktów oraz dodawanie nowych pozycji do listy.</p>
    </li>
</ul>

<h2>Technologie:</h2>
<ul>
    <li><strong>Framework:</strong> Nuxt 3</li>
    <li><strong>Szablon:</strong> Docus</li>
    <li><strong>Hostowanie:</strong> Netlify</li>
</ul>

<h2>Jak uruchomić projekt lokalnie:</h2>
<ol>
    <li>Sklonuj repozytorium:
        <pre><code>git clone https://github.com/TwojeRepozytorium/Randoms.git</code></pre>
    </li>
    <li>Przejdź do katalogu projektu:
        <pre><code>cd Randoms</code></pre>
    </li>
    <li>Zainstaluj zależności:
        <pre><code>npm install</code></pre>
    </li>
    <li>Stwórz plik <code>.env</code> z wymaganymi zmiennymi:
        <pre><code>
apiNinjaKey=Twój_Klucz_API
        </code></pre>
    </li>
    <li>Uruchom aplikację w trybie deweloperskim:
        <pre><code>npm run dev</code></pre>
    </li>
</ol>

<h2>Zależności:</h2>
<ul>
    <li><strong>Docus:</strong> <code>@nuxt-themes/docus</code></li>
</ul>

<h2>Autor:</h2>
<p>Projekt stworzony przez <strong>Maikel</strong> w ramach kursu z Nuxt.js.</p>
