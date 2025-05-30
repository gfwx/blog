<main class="">
	<form method="POST" action="?/login" class="flex flex-col w-fit">
		<div class="form-cont">
			<label for="email"> Email </label>
			<input name="email" type="email" class="input" />

			<label for="password"> Password </label>
			<input name="password" type="password" class="input" />
		</div>

		<div class="form-cont">
			<button class="btn btn-primary">Login</button>
			<button formaction="?/signup">Sign up</button>
		</div>
	</form>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
	}

	.form-cont {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0;
		gap: 0.5rem;
	}
</style>
